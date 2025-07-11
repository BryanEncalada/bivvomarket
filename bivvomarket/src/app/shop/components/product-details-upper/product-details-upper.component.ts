import { Component, Input } from '@angular/core';
import { IProduct } from '../../interface/iproduct';
import { ProductService } from '../../../shared/services/product.service';
import { CartService } from '../../../shared/services/cart.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details-upper',
  imports: [NgClass, NgIf, NgFor, RouterLink],
  templateUrl: './product-details-upper.component.html',
  styleUrl: './product-details-upper.component.scss'
})
export class ProductDetailsUpperComponent {

  @Input() product!: IProduct;
  @Input() bottomShow: boolean = true;
  @Input() style_2: boolean = false;

    constructor(
    public productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    if (this.product) {
      this.productService.activeImg = this.product.img;
    }
  }

}
