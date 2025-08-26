import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IProduct } from '../types/IProduct';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public filter_offcanvas: boolean = false;
  public pageSize: number = 9;
  // private apiUrl = 'http://localhost:3000/api/products';
  private apiUrl = 'https://app.enervym.com/api/products';

  // Get Products
  public get products(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  constructor(private http: HttpClient) { }

  activeImg: string | string[] | null = null;

  handleImageActive(img: string) {
    this.activeImg = img;
  }

  handleImageActiveArray(imgData: string | { imagen: string }[]) {
    if (typeof imgData === 'string') {
      this.activeImg = imgData;
    } else {
      this.activeImg = imgData.map((item) => item.imagen).toString();
    }
  }

  // Get Products By id
  public getProductById(id: string): Observable<IProduct> {
    //console.log('produgetProductByIdctId', id);

    return this.http.get<IProduct>(`${this.apiUrl}/${id}`).pipe(
      tap((product) => {

        this.handleImageActive(product.img);
      })
    );
  }
  // Get related Products
  public getRelatedProducts(productId: string, brand: string): Observable<IProduct[]> {


    return this.products.pipe(
      map((items) => {
        return items.filter(
          (p) =>
            p.category == brand &&
            p._id != productId
        );
      })
    );
  }

  // Get max price
  // public get maxPrice(): number {
  //   const max_price = all_products.reduce((max, product) => {
  //     return product.price > max ? product.price : max;
  //   }, 0);
  //   return max_price;
  // }

  // shop filterSelect
  public filterSelect = [
    { value: 'asc', text: 'Default Sorting' },
    { value: 'low', text: 'Low to Hight' },
    { value: 'high', text: 'High to Low' },
    { value: 'on-sale', text: 'On Sale' },
  ];

  // Get Product Filter
  // public filterProducts(): Observable<IProduct[]> {
  //   return this.products.pipe(
  //     map((product) => {
  //       return product;
  //     })
  //   );
  // }

  public filterProducts(): Observable<IProduct[]> {
    return this.products;
  }



  public getFilteredProducts(params: any): Observable<IProduct[]> {
    let queryParams = new HttpParams();

    Object.keys(params).forEach((key) => {
      if (params[key] !== null && params[key] !== undefined) {
        queryParams = queryParams.set(key, params[key]);
      }
    });

    return this.http.get<IProduct[]>(this.apiUrl, { params: queryParams });
  }

  public getSortedProducts(sort: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}?sort=${sort}`);
  }

  /*
    ---------------------------------------------
    ------------- Product Pagination  -----------
    ---------------------------------------------
  */
  public getPager(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 9
  ) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // Paginate Range
    let paginateRange = 3;

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage < paginateRange - 1) {
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}
