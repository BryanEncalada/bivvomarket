import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { EffectFade, Pagination } from 'swiper/modules';
import { IHeroSlider } from '../../../types/hero-slider-t';
import { HeroSliderData } from '../../../data/hero-slider-data';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { WaveDividerComponent } from '../../wave-divider/wave-divider.component';

@Component({
  selector: 'app-hero-slider-two',
  imports: [CommonModule, TranslocoModule, WaveDividerComponent],
  templateUrl: './hero-slider-two.component.html',
  styleUrl: './hero-slider-two.component.scss',
})
export class HeroSliderTwoComponent {
  @ViewChild('heroSliderContainer') heroSliderContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;
  public hero_slider_data: IHeroSlider[] = HeroSliderData.hero_slider_two;

  ngAfterViewInit() {
    if (this.heroSliderContainer) {
      this.swiperInstance = new Swiper('.slider-active', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        effect: 'fade',
        modules: [Pagination, EffectFade],
        pagination: {
          clickable: true,
          el: '.tp-slider-dot-2',
        },
      });
    }
  }
}
