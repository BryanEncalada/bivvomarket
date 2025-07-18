import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mini-cart',
  imports: [NgIf, NgClass, NgFor, RouterLink],
  templateUrl: './mini-cart.component.html',
  styleUrl: './mini-cart.component.scss'
})
export class MiniCartComponent {
constructor(public cartService: CartService) { }
}
