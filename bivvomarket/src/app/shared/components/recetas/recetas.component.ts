import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import blog_data from '../../types/blog-data';
import IBlogType from '../../types/blog-d-t';
import Swiper from 'swiper';
import { EffectFade, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-recetas',
  imports: [CommonModule, RouterModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.scss',
})
export class RecetasComponent {
  @ViewChild('blogSliderContainer') blogSliderContainer!: ElementRef;

  public blogSliderInstance: Swiper | undefined;
  public brandSliderInstance: Swiper | undefined;

  public swiperInstance: Swiper | undefined;
  public productSliderInstance: Swiper | undefined;
  public blog_items: IBlogType[] = blog_data.filter((b) => b.blog === 'home-7');

  ngOnInit(): void {
    console.log('blog_items', this.blog_items);
  }

  ngAfterViewInit() {
    if (this.blogSliderContainer) {
      this.blogSliderInstance = new Swiper('.blog__slider-active', {
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
          '768': {
            slidesPerView: 2,
          },
          '576': {
            slidesPerView: 1,
          },
          '0': {
            slidesPerView: 1,
          },
        },
      });
    }
  }
}
