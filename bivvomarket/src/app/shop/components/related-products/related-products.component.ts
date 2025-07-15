import { Component, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor } from '@angular/common';
import { IProduct } from '../../interface/iproduct';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-related-products',
  imports: [ProductItemComponent, NgFor],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss'
})
export class RelatedProductsComponent {
  @Input() productId: number | undefined;
  @Input() brand: string | undefined;
  public related_products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    if (this.productId && this.brand) {
      this.productService
        .getRelatedProducts(this.productId, this.brand)
        .subscribe((products) => {
          console.log(products);
          this.related_products = products.slice(0, 4);
        });
    }
  }

}
