import { NgClass, NgFor, NgIf, ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct } from '../../interface/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from "../pagination/pagination.component";
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { FormsModule } from '@angular/forms';
import { UtilsService } from '../../../shared/services/utils.service';
import { ProductService } from '../../../shared/services/product.service';
import { TituloSeccionComponent } from '../../../shared/components/titulo-seccion/titulo-seccion.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-shop-area',
  imports: [NgClass, NgFor, NgIf, FormsModule, ProductItemComponent, ProductListItemComponent, PaginationComponent, TituloSeccionComponent, TranslocoModule],
  templateUrl: './shop-area.component.html',
  styleUrl: './shop-area.component.scss'
})
export class ShopAreaComponent {

  @Input() shop_right = false;
  @Input() shop_4_col = false;
  @Input() shop_3_col = false;


  public products: IProduct[] = [];
  public minPrice: number = 0;
  public maxPrice: number = 0;
  public niceSelectOptions: { value: string; text: string }[] = [];
  public brands: string[] = [];
  public category: string | null = null;
  public subcategory: string | null = null;
  public size: string | null = null;
  public color: string | null = null;
  public brand: string | null = null;
  public pageNo: number = 1;
  public pageSize: number = 12;
  public paginate: any = {}; // Pagination use only
  public sortBy: string = 'asc'; // Sorting Order

  constructor(
    public productService: ProductService,
    public utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller
  ) {

    this.maxPrice = this.productService.maxPrice;
    this.niceSelectOptions = this.productService.filterSelect;

    this.route.queryParams.subscribe((params) => {

      this.minPrice = params['minPrice'] ? params['minPrice'] : this.minPrice;
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : this.maxPrice;
      this.brand = params['brand'] ? params['brand'] : null;
      this.category = params['category'] ? params['category'] : null;
      this.subcategory = params['subcategory'] ? params['subcategory'] : null;
      this.size = params['size'] ? params['size'] : null;
      this.color = params['color'] ? params['color'] : null;
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.sortBy = params['sortBy'] ? params['sortBy'] : 'asc';

      this.productService.filterProducts().subscribe((response) => {
        // Sorting Filter
        this.products = this.productService.sortProducts(response, this.sortBy);

        // Category Filter
        if (this.category) {
          this.products = this.products.filter(
            (p) => this.utilsService.convertToURL(p.parentCategory) === this.category
          );
        }
        // sub category Filter
        if (this.subcategory) {
          this.products = this.products.filter(
            (p) => this.utilsService.convertToURL(p.category) === this.subcategory
          );
        }
        // size Filter
        if (this.size) {
          this.products = this.products.filter((product) => {
            return (
              product.sizes &&
              product.sizes.some((size) => size.toLowerCase() === this.size)
            );
          });
        }
        // color Filter
        if (this.color) {
          this.products = this.products.filter((product) => {
            return (
              product.colors &&
              product.colors.some((c) => c.split(' ').join('-').toLowerCase() === this.color)
            );
          });
        }
        // brand Filter
        if (this.brand) {
          this.products = this.products.filter((p) => p.brand.toLowerCase() === this.brand);
        }

        // Price Filter
        this.products = this.products.filter(
          (p) => p.price >= Number(this.minPrice) && p.price <= Number(this.maxPrice)
        );

        // Paginate Products
        this.paginate = this.productService.getPager(this.products.length, Number(+this.pageNo), this.pageSize);
        this.products = this.products.slice(this.paginate.startIndex, this.paginate.endIndex + 1);

      });





    });

  }

  onSortingChange(value: string) {

    this.sortByFilter(value);
  }

  // SortBy Filter
  sortByFilter(value: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sortBy: value ? value : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
      this.viewScroller.scrollToAnchor('products'); // Anchore Link
    });
  }

  // product Pagination
  setPage(page: number) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: 'merge', // preserve the existing query params in the route
        skipLocationChange: false, // do trigger navigation
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor('products'); // Anchore Link
      });
  }

  public cssPillsGrid: boolean = true;
  public cssPillsList: boolean = false;

  onchange() {

    this.cssPillsGrid = !this.cssPillsGrid;
    this.cssPillsList = !this.cssPillsList;
  
  }

}
