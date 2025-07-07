import { Injectable } from '@angular/core';
import { IProduct } from '../types/IProduct';


// const state = {
//   compare_items: JSON.parse(localStorage['compare_products'] || '[]')
// }

@Injectable({
  providedIn: 'root'
})


export class CompareService {

  public getCompareProducts() {
    return this.compare_items;
  }

  private compare_items: IProduct[] = [];

  constructor() {

    if (typeof localStorage !== 'undefined') {
      this.compare_items = JSON.parse(localStorage.getItem('compare_products') || '[]');
    }

  }

  // add_compare_product
  add_compare_product(payload: IProduct) {
    const isAdded = this.compare_items.findIndex((p: IProduct) => p.id === payload.id);
    if (isAdded !== -1) {
      this.compare_items = this.compare_items.filter((p: IProduct) => p.id !== payload.id);
      //this.toastrService.error(`${payload.title} remove to compare`);
    } else {
      this.compare_items.push(payload);
      //this.toastrService.success(`${payload.title} added to compare`);
    }
    localStorage.setItem("compare_products", JSON.stringify(this.compare_items));
  };
  // remove compare
  removeCompare(payload: IProduct) {
    this.compare_items = this.compare_items.filter((p: IProduct) => p.id !== payload.id);
    //this.toastrService.error(`${payload.title} remove to compare`);
    localStorage.setItem("compare_products", JSON.stringify(this.compare_items));
  };
}
