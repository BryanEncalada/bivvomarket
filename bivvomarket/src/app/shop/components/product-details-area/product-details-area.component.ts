import { Component, Input } from '@angular/core';
import { IProduct } from '../../interface/iproduct';
import { ProductDetailsUpperComponent } from '../product-details-upper/product-details-upper.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-details-area',
  imports: [ProductDetailsUpperComponent, NgFor, NgClass, NgIf],
  templateUrl: './product-details-area.component.html',
  styleUrl: './product-details-area.component.scss'
})
export class ProductDetailsAreaComponent {
  @Input() product: IProduct | undefined;

  public cssDescription: boolean = true;
  public cssAdditional: boolean = false;

  onChange() {

    this.cssDescription = !this.cssDescription;
    this.cssAdditional = !this.cssAdditional;

  }

}
