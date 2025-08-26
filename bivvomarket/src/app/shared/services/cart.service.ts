import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../types/IProduct';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public orderQuantity: number = 1;
  public isCartOpen: boolean = false;
  private cart_products: IProduct[] = [];

  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.cart_products = JSON.parse(
        localStorage.getItem('cart_products') || '[]'
      );
    }
  }

  public getCartProducts(): IProduct[] {
    return this.cart_products;
  }

  handleOpenCartSidebar() {
    this.isCartOpen = !this.isCartOpen
  }

  // add_cart_product
  addCartProduct(payload: IProduct) {
    const isExist = this.cart_products.some((i: IProduct) => i._id === payload._id);
    if (payload.status === 'out-of-stock' || payload.quantity === 0) {
      //console.log(`Out of stock ${payload.title}`);
    }
    else if (!isExist) {
      const newItem = {
        ...payload,
        order_quantity: this.orderQuantity,
      };
      this.cart_products.push(newItem);
      //console.log(`${payload.title} added to cart`, this.cart_products);
    } else {
      this.cart_products.map((item: IProduct) => {
        if (item._id === payload._id) {
          if (typeof item.order_quantity !== "undefined") {
            if (item.quantity >= item.order_quantity + this.orderQuantity) {
              item.order_quantity =
                this.orderQuantity !== 1
                  ? this.orderQuantity + item.order_quantity
                  : item.order_quantity + 1;
              //console.log(`${this.orderQuantity} ${item.title} added to cart`);
            } else {
              //console.log(`No more quantity available for this product!`);
              this.orderQuantity = 1;
            }
          }
        }
        return { ...item };
      });
    }
    localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
  };

  // total price quantity
  public totalPriceQuantity() {
    return this.cart_products.reduce(
      (cartTotal: { total: number; quantity: number }, cartItem: IProduct) => {
        const { price, order_quantity, discount } = cartItem;
        if (typeof order_quantity !== "undefined") {
          if (discount && discount > 0) {
            // Calculate the item total with discount
            const itemTotal = (price - (price * discount) / 100) * order_quantity;
            cartTotal.total += itemTotal;
          } else {
            // Calculate the item total without discount
            const itemTotal = price * order_quantity;
            cartTotal.total += itemTotal;
          }
          cartTotal.quantity += order_quantity;
        }
        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
  };


  // quantity increment
  increment() {
    console.log('increment', this.orderQuantity);
    return this.orderQuantity = this.orderQuantity + 1;
  }

  // quantity decrement
  decrement() {
    return this.orderQuantity =
      this.orderQuantity > 1
        ? this.orderQuantity - 1
        : this.orderQuantity = 1;
  }

  // quantityDecrement
  quantityDecrement(payload: IProduct) {
    this.cart_products.map((item: IProduct) => {
      if (item._id === payload._id) {
        if (typeof item.order_quantity !== "undefined") {
          if (item.order_quantity > 1) {
            item.order_quantity = item.order_quantity - 1;
            //this.toastrService.info(`Decrement Quantity For ${item.title}`);
          }
        }
      }
      return { ...item };
    });
    localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
  };

  // remover_cart_products
  removeCartProduct(payload: IProduct) {
    this.cart_products = this.cart_products.filter(
      (p: IProduct) => p._id !== payload._id
    );
    //this.toastrService.error(`${payload.title} remove to cart`);
    localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
  };

  // clear cart
  clear_cart() {
    const confirmMsg = window.confirm(
      "Are you sure deleted your all cart items ?"
    );
    if (confirmMsg) {
      this.cart_products = [];
    }
    localStorage.setItem("cart_products", JSON.stringify(this.cart_products));
  };
  // initialOrderQuantity
  initialOrderQuantity() {
    return this.orderQuantity = 1;
  };


  getCantProductCard(payload: IProduct): number {

    const isExist = this.cart_products.some(
      (i: IProduct) => i._id === payload._id
    );

    if (!isExist)
      return 1;

    let cantidad = 1;

    for (let i = 0; i < this.cart_products.length; i++) {
      const item = this.cart_products[i];
      if (item._id === payload._id) {
        cantidad = item.order_quantity;
        break; // ya lo encontró, salimos del bucle
      }
    }

    return cantidad;

  }

}
