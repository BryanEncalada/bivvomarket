import { Injectable } from '@angular/core';
import { IProduct } from '../types/IProduct';


// const state = {
//   wishlists: JSON.parse(localStorage['wishlist_products'] || '[]')
// }

@Injectable({
  providedIn: 'root'
})


export class WishlistService {

  constructor() {

    if (typeof localStorage !== 'undefined') {
      this.wishlists = JSON.parse(localStorage.getItem('wishlist_products') || '[]');
    }

  }

  private wishlists: IProduct[] = [];

  public getWishlistProducts() {
    return this.wishlists;
  }

  // add_wishlist_product
  add_wishlist_product(payload: IProduct) {
    const isAdded = this.wishlists.findIndex((p: IProduct) => p.id === payload.id);
    if (isAdded !== -1) {
      this.wishlists = this.wishlists.filter((p: IProduct) => p.id !== payload.id);
      //this.toastrService.error(`${payload.title} remove to wishlist`);
    } else {
      this.wishlists.push(payload);
      //this.toastrService.success(`${payload.title} added to wishlist`);
    }
    localStorage.setItem("wishlist_products", JSON.stringify(this.wishlists));
  };
  // removeWishlist
  removeWishlist(payload: IProduct) {
    this.wishlists = this.wishlists.filter((p: IProduct) => p.id !== payload.id);
    //this.toastrService.error(`${payload.title} remove to wishlist`);
    localStorage.setItem("wishlist_products", JSON.stringify(this.wishlists));
  };
}
