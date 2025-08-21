import {
  CommonModule,
  NgClass,
  NgFor,
  NgIf,
  ViewportScroller,
} from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { FormsModule } from '@angular/forms';
import { UtilsService } from '../../../shared/services/utils.service';
import { ProductService } from '../../../shared/services/product.service';
import { TranslocoModule } from '@jsverse/transloco';
import { IProduct } from '../../../shared/types/IProduct';
import { TituloSeccionComponent } from "../../../shared/components/titulo-seccion/titulo-seccion.component";

@Component({
  selector: 'app-shop-area',
  imports: [
    NgClass,
    NgFor,
    NgIf,
    FormsModule,
    ProductItemComponent,
    ProductListItemComponent,
    PaginationComponent,
    TranslocoModule,
    CommonModule,
    TituloSeccionComponent
],
  templateUrl: './shop-area.component.html',
  styleUrl: './shop-area.component.scss',
})
export class ShopAreaComponent {
  @Input() shop_right = false;
  @Input() shop_4_col = false;
  @Input() shop_3_col = false;
  @Input() colorFondo: string = '#fdd1c4';

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

  public cssPillsGrid: boolean = true;
  public cssPillsList: boolean = false;

  public errorMessage: string = '';

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
      this.pageNo = params['page'] ? +params['page'] : this.pageNo;
      this.sortBy = params['sortBy'] ?? 'asc';

      const queryParams = {
        sort: this.getSortParam(this.sortBy),
        category: params['category'] ?? null,
        subcategory: params['subcategory'] ?? null,
        brand: params['brand'] ?? null,
        size: params['size'] ?? null,
        color: params['color'] ?? null,
        minPrice: params['minPrice'] ?? null,
        maxPrice: params['maxPrice'] ?? null,
      };

      this.productService
        .getFilteredProducts(queryParams)
        .subscribe((products) => {
          this.products = products;

          // Paginación local
          this.paginate = this.productService.getPager(
            this.products.length,
            this.pageNo,
            this.pageSize
          );
          this.products = this.products.slice(
            this.paginate.startIndex,
            this.paginate.endIndex + 1
          );
        },
          (error) => {
            // Captura del error
            console.log(error)
            this.errorMessage = error.message;
          });
    });
  }

  onSortingChange(value: string) {
    this.sortByFilter(value);
  }

  // SortBy Filter
  //sortByFilter(value: string) {
    // this.router
    //   .navigate([], {
    //     relativeTo: this.route,
    //     queryParams: { sortBy: value ? value : null },
    //     queryParamsHandling: 'merge',
    //     skipLocationChange: false,
    //   })
    //   .finally(() => {
    //     this.viewScroller.setOffset([120, 120]);
    //     this.viewScroller.scrollToAnchor('products');
    //   });
  //}

   sortByFilter(sortValue: string) {
    switch (sortValue) {

      case 'high':
        this.products.sort((a, b) => b.price - a.price);
        break;

      case 'low':
        this.products.sort((a, b) => a.price - b.price);
        break;

      default: // asc o el "Default Sorting"
        this.products.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
  }

  // Pagination
  setPage(page: number) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor('products');
      });
  }

  // Mapea el sortBy del frontend al backend
  getSortParam(payload: string): string {
    switch (payload) {
      case 'asc':
        return 'id_asc';
      case 'sale':
        return 'discount';
      case 'low':
        return 'price_asc';
      case 'high':
        return 'price_desc';
      default:
        return '';
    }
  }

  onchange() {
    this.cssPillsGrid = !this.cssPillsGrid;
    this.cssPillsList = !this.cssPillsList;
  }
}
