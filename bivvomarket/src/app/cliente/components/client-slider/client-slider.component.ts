import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import Swiper from 'swiper';
import { TituloSeccionComponent } from '../../../shared/components/titulo-seccion/titulo-seccion.component';

@Component({
  selector: 'app-client-slider',
  imports: [NgFor, TranslocoModule],
  templateUrl: './client-slider.component.html',
  styleUrl: './client-slider.component.scss',
})
export class ClientSliderComponent {
  @ViewChild('brandSliderContainer') brandSliderContainer!: ElementRef;

  public brandSliderInstance: Swiper | undefined;

  // client logos
  public client_logos: { img: string; link: string }[] = [
    { img: '/assets/img/slider/04/Bivvo01.webp', link: 'https://viena.pe/' },
    {
      img: '/assets/img/slider/04/Bivvo02.webp',
      link: 'https://qchurros.com/',
    },

    {
      img: '/assets/img/client/mozart.jpg',
      link: 'https://www.instagram.com/mozart.pe/',
    },
    {
      img: '/assets/img/client/sopranos.png',
      link: 'https://www.instagram.com/sopranos.oficial/',
    },
    {
      img: '/assets/img/client/chef.png',
      link: 'https://www.instagram.com/elchefyelmar/',
    },
    {
      img: '/assets/img/client/holly.jpg',
      link: 'https://www.instagram.com/holiday.inn.miraflores/',
    },
  ];

  ngAfterViewInit() {
    if (this.brandSliderContainer) {
      this.brandSliderInstance = new Swiper('.brand__slider-active', {
        slidesPerView: 5,
        spaceBetween: 10,
        breakpoints: {
          '1200': {
            slidesPerView: 1,
          },
          '992': {
            slidesPerView: 2,
          },
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
