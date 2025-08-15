import { IProduct } from '../../shared/types/IProduct';
import { ProductService } from '../../shared/services/product.service';

import { HeroSliderTwoComponent } from '../../shared/components/slider/hero-slider-two/hero-slider-two.component';
import { ShopCategoryComponent } from '../../shop/shop-category/shop-category.component';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import { ShopAreaComponent } from '../../shop/components/shop-area/shop-area.component';
import { VideoComponent } from '../../shared/components/video/video.component';
import { RecetasComponent } from '../../shared/components/recetas/recetas.component';
import { ClientSliderComponent } from '../../cliente/components/client-slider/client-slider.component';
import { ResenaComponent } from '../../cliente/components/resena/resena.component';
import { CaracteristicasComponent } from '../../shared/components/caracteristicas/caracteristicas.component';
import { VideoSoloComponent } from '../../shared/components/video-solo/video-solo.component';
import { EspaciadorComponent } from '../../shared/components/espaciador/espaciador.component';
import { Video2Component } from '../../shared/components/video2/video2.component';
import { OffcanvasComponent } from '../../shared/header/offcanvas/offcanvas.component';

@Component({
  selector: 'app-home-two',
  imports: [
    HeroSliderTwoComponent,
    ShopAreaComponent,
    VideoComponent,
    Video2Component,
    RecetasComponent,
    ResenaComponent,
    CaracteristicasComponent,
    CommonModule,
    VideoSoloComponent,
    EspaciadorComponent,
  ],
  templateUrl: './home-two.component.html',
  styleUrl: './home-two.component.scss',
})
export class HomeTwoComponent {
  //public big_item: IProduct | undefined;
  //public trending_products: IProduct[] = [];
  //public discount_products: IProduct[] = [];

  constructor(
    private productService: ProductService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const Swiper = (await import('swiper')).default;

      const swiper = new Swiper('.mySwiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 3000,
        },
      });
    }
  }
}
