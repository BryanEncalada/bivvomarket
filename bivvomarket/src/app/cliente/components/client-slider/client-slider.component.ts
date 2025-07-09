import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-client-slider',
  imports: [NgFor],
  templateUrl: './client-slider.component.html',
  styleUrl: './client-slider.component.scss'
})
export class ClientSliderComponent {


  @ViewChild('brandSliderContainer') brandSliderContainer!: ElementRef;


  public brandSliderInstance: Swiper | undefined;

  // client logos
  public client_logos: string[] = [
    '/assets/img/client/client-1.jpg',
    '/assets/img/client/client-2.jpg',
    '/assets/img/client/client-3.jpg',
    '/assets/img/client/client-4.jpg',
    '/assets/img/client/client-5.jpg',
    '/assets/img/client/client-2.jpg',
    '/assets/img/client/client-4.jpg',
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
