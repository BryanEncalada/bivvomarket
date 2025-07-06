import { Component } from '@angular/core';
import { IProduct } from '../../shared/types/IProduct';
import { ProductService } from '../../shared/services/product.service';
import { HeroSliderTwoComponent } from "../../shared/components/slider/hero-slider-two/hero-slider-two.component";
import { HeaderTwoComponent } from "../../shared/header/header-two/header-two.component";
import { ShopCategoryComponent } from "../../shop/shop-category/shop-category.component";


@Component({
  selector: 'app-home-two',
  imports: [HeroSliderTwoComponent, HeaderTwoComponent, ShopCategoryComponent],
  templateUrl: './home-two.component.html',
  styleUrl: './home-two.component.scss'
})
export class HomeTwoComponent {
 public big_item: IProduct | undefined;
  public trending_products: IProduct[] = [];
  public discount_products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.big_item = products.find(p => p.big_img);
      this.trending_products = products.filter(p => p.trending).slice(0, 6);
      this.discount_products = products.filter((p) => p.discount! > 0).slice(0,12);
    });
  }


  ngAfterViewInit() {

  }
}