import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import Swiper from 'swiper';

@Component({
  selector: 'app-client-slider',
  imports: [NgFor, TranslocoModule],
  templateUrl: './client-slider.component.html',
  styleUrl: './client-slider.component.scss'
})
export class ClientSliderComponent {


  @ViewChild('brandSliderContainer') brandSliderContainer!: ElementRef;


  public brandSliderInstance: Swiper | undefined;

  // client logos
  public client_logos: { img: string; link: string }[] = [
    { img: '/assets/img/client/VienaCafe.jpg', link: 'https://viena.pe/' },
    { img: '/assets/img/client/qchurros.png', link: 'https://qchurros.com/' },
    { img: '/assets/img/client/carnibar.png', link: 'https://www.instagram.com/carnibar.pe/' },
    { img: '/assets/img/client/mozart.jpg', link: 'https://www.instagram.com/mozart.pe/' },
    { img: '/assets/img/client/sopranos.png', link: 'https://www.instagram.com/sopranos.oficial/' },
    { img: '/assets/img/client/chef.png', link: 'https://www.instagram.com/elchefyelmar/' },
    { img: '/assets/img/client/holly.jpg', link: 'https://www.instagram.com/holiday.inn.miraflores/' },
  ];

  ngAfterViewInit() {


    if (this.brandSliderContainer) {
      this.brandSliderInstance = new Swiper('.brand__slider-active', {
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
          '1200': {
            slidesPerView: 5,
          },
          '992': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 2,
          },
          '576': {
            slidesPerView: 2,
          },
          '0': {
            slidesPerView: 1,
          },
        }
      })
    }

  }


}
