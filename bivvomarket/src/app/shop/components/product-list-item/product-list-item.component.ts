import { Component, Input } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { CompareService } from '../../../shared/services/compare.service';
import { UtilsService } from '../../../shared/services/utils.service';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { IProduct } from '../../../shared/types/IProduct';

@Component({
  selector: 'app-product-list-item',
  imports: [RouterModule, NgIf, NgFor],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss',
})
export class ProductListItemComponent {
  @Input() product!: IProduct;

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public compareService: CompareService,
    public utilsService: UtilsService
  ) {  }

  ngOnInit(): void {
    console.log(
      'Product recibido en ProductListItemComponent:',
      this.product
    );
  }

  // add to cart
  addToCart(item: IProduct) {
    this.cartService.addCartProduct(item);
  }

  // add to cart
  addToWishlist(product: IProduct) {
    this.wishlistService.add_wishlist_product(product);
  }

  // add to cart
  addToCompare(product: IProduct) {
    this.compareService.add_compare_product(product);
  }

  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService
      .getCartProducts()
      .some((prd: IProduct) => prd._id === item._id);
  }
  isItemInWishlist(item: IProduct): boolean {
    return this.wishlistService
      .getWishlistProducts()
      .some((prd: IProduct) => prd._id === item._id);
  }
  isItemInCompare(item: IProduct): boolean {
    return this.compareService
      .getCompareProducts()
      .some((prd: IProduct) => prd._id === item._id);
  }
}
