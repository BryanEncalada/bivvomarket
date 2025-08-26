import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [NgIf, NgFor, RouterLink, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  couponCode: string = '';
  shipCost: number = 0;

  constructor(public cartService: CartService) {

    this.cartService.orderQuantity = 1;

  }

  handleCouponSubmit() {
    if (this.couponCode) {
      this.couponCode = ''
    }
  }

  handleShippingCost(value: number | string) {
    if (value === 'free') {
      this.shipCost = 0;
    } else {
      this.shipCost = value as number;
    }
  }

}
