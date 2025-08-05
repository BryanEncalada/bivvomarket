import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { TituloSeccionComponent } from '../../../shared/components/titulo-seccion/titulo-seccion.component';

import { WaveDividerComponent } from '../../../shared/components/wave-divider/wave-divider.component';

import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { combineLatest, Subscription } from 'rxjs';

register();

@Component({
  selector: 'app-resena',
  imports: [NgFor, TituloSeccionComponent, TranslocoModule],
  templateUrl: './resena.component.html',
  styleUrl: './resena.component.scss',
})
export class ResenaComponent {
  public nav_data = [
    { id: 1, img: '/assets/img/testimonial/person-1.jpg' },
    { id: 2, img: '/assets/img/testimonial/person-2.jpg' },
    { id: 3, img: '/assets/img/testimonial/person-3.jpg' },
    { id: 4, img: '/assets/img/testimonial/person-4.jpg' },
  ];

  public testimonial_data: any[] = [];
  private subscription!: Subscription;

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    const ids = [1, 2, 3, 4];
    const observables = ids.map((id) =>
      this.translocoService.selectTranslateObject(`testimonials.${id}`)
    );

    this.subscription = combineLatest(observables).subscribe((translations) => {
      this.testimonial_data = translations.map((translation, index) => ({
        id: ids[index],
        ...translation,
      }));

      // Esperar al siguiente ciclo de renderizado
      setTimeout(() => {
        const navSwiper = new Swiper('.testimonial__nav', {
          spaceBetween: 10,
          slidesPerView: 3,
          freeMode: true,
          watchSlidesProgress: true,
        });
        new Swiper('.testimonial__wrapper', {
          slidesPerView: 1,
          spaceBetween: 0,
          thumbs: {
            swiper: navSwiper,
          },
          pagination: {
            clickable: true,
            el: '.tp-slider-dot-3',
          },
        });
      });
    });
  }
}
