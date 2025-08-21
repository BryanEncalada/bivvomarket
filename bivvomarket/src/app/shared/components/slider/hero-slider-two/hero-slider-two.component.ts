import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { EffectFade, Pagination } from 'swiper/modules';
import { IHeroSlider } from '../../../types/hero-slider-t';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-slider-two',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './hero-slider-two.component.html',
  styleUrl: './hero-slider-two.component.scss',
})
export class HeroSliderTwoComponent {
  @ViewChild('heroSliderContainer') heroSliderContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;
  public hero_slider_data: IHeroSlider[] = [];
  private subscription!: Subscription;

  constructor(private translocoService: TranslocoService) {}

  ngAfterViewInit() {
    const ids = [1, 2, 3];
    const observables = ids.map((id) =>
      this.translocoService.selectTranslateObject(`heroSlider.${id}`)
    );

    this.subscription = combineLatest(observables).subscribe((translations) => {
      this.hero_slider_data = translations.map((translation, index) => ({
        id: ids[index],
        ...translation,
      }));

      setTimeout(() => {
        if (this.heroSliderContainer) {
          this.swiperInstance = new Swiper('.slider-active', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            effect: 'fade',
            modules: [Pagination, EffectFade],
            pagination: {
              clickable: true,
              el: '.tp-slider-dot-2',
            },
          });
        }
      });
    });
  }
}
