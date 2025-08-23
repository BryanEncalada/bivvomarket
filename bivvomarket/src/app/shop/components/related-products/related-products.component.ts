import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../../shared/services/product.service';
import { TranslocoModule } from '@jsverse/transloco';
import { IProduct } from '../../../shared/types/IProduct';


@Component({
  selector: 'app-related-products',
  imports: [ProductItemComponent, NgFor, TranslocoModule, NgIf],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss',
})
export class RelatedProductsComponent implements OnChanges {

  @Input() productId?: string;
  @Input() brand?: string;

  related_products: IProduct[] = [];

  constructor(private productService: ProductService) {



  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['brand'] || changes['productId']) {

      this.productService.getRelatedProducts(this.productId!, this.brand!)
        .subscribe((res: IProduct[]) => {
          this.related_products = res;
          console.log("Productos relacionados:", this.related_products);
        });

    }

  }


}
