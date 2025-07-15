import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { TituloSeccionComponent } from '../../../shared/components/titulo-seccion/titulo-seccion.component';
import { TranslocoModule } from '@jsverse/transloco';
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

  public testimonial_data = [
    {
      id: 1,
      name: 'Ben W',
      title: '¡El snack perfecto post entrenamiento!',
      desc: 'Estaba buscando algo para picar que satisficiera mi antojo de comida chatarra después del entrenamiento. Estoy tan contenta de haber encontrado esto.',
    },
    {
      id: 2,
      name: 'Ana B',
      title: 'Cuando lo Clásico Sabe Mejor',
      desc: 'El pop clásico es clásicamente delicioso.',
    },
    {
      id: 3,
      name: 'Jen T',
      title: '¡Por fin un snack saludable que mis hijos aman!',
      desc: 'Mis hijos son adictos a los dulces, así que quería que comieran algo saludable. Al principio dudaba un poco, pero una vez que probaron el pop de miel de quinoa.',
    },
    {
      id: 4,
      name: 'Su F',
      title: 'Saludable, delicioso… y totalmente adictivo',
      desc: 'Escuché mucho sobre este pop de quinoa de mis amigos. naturalmente, quería darle una oportunidad. es tan bueno y saludable también. 10/10 recomendará a todos.',
    },
  ];

  ngOnInit() {
    const swiper = new Swiper('.testimonial__nav', {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper('.testimonial__wrapper', {
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
      pagination: {
        clickable: true,
        el: '.tp-slider-dot-3',
      },
    });
  }
}
