import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  imports: [NgFor],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss',
})
export class PruebaComponent {
  images = [
    { src: 'assets/img/nuevo/2.jpg', alt: 'Imagen 1' },
    { src: 'assets/img/nuevo/3.jpg', alt: 'Imagen 2' },
    { src: 'assets/img/nuevo/4.jpg', alt: 'Imagen 3' },
  ];
}
