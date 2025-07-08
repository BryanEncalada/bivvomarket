import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailsAreaComponent } from '../product-details-area/product-details-area.component';
import { RelatedProductsComponent } from '../related-products/related-products.component';
import { IProduct } from '../../interface/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-dynamic-shop-details',
  imports: [NgIf, ProductDetailsAreaComponent, RelatedProductsComponent],
  templateUrl: './dynamic-shop-details.component.html',
  styleUrl: './dynamic-shop-details.component.scss'
})
export class DynamicShopDetailsComponent {

public product: IProduct | null | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const productId = params.get('id');
          if (productId) {
            return this.productService.getProductById(productId);
          }
          return of<IProduct | null>(null); // Emit null if there's no productId
        })
      )
      .subscribe((product: IProduct | null | undefined) => {
        if (!product) {
          // Product not found, navigate to 404 page
          this.router.navigate(['/404']);
        } else {
          this.product = product;
        }
      });
  }

}
