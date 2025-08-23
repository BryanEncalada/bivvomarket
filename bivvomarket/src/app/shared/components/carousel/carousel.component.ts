import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TituloSeccionComponent } from '../titulo-seccion/titulo-seccion.component';
import { TranslocoModule } from '@jsverse/transloco';

export interface GalleryImage {
  /** ruta fallback (jpg/png) o webp si solo usas webp */
  src: string;
  /** versión webp opcional para <source> */
  webp?: string;
  title?: string;
  caption?: string;
  alt?: string;
  width?: number;
  height?: number;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, TituloSeccionComponent, TranslocoModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() imageHeight = 160;

  /** si no pasas @Input images, usa estos de ejemplo */
  @Input() images: GalleryImage[] = [
    {
      webp: '/assets/img/slider/04/Bivvo01.webp',
      src: '/assets/img/slider/04/Bivvo01.webp',
      title: 'Cereal Natural',
      caption: 'Render pequeña',
      alt: 'Cereal natural en bowl',
    },
    {
      webp: '/assets/img/slider/04/Bivvo02.webp',
      src: '/assets/img/slider/04/Bivvo02.webp',
      title: 'Bowl Overhead',
      caption: 'Optimizada para card',
      alt: 'Bowl visto desde arriba',
    },
    {
      webp: '/assets/img/slider/04/Bivvo05.webp',
      src: '/assets/img/slider/04/Bivvo05.webp',
      title: 'Cacao Close',
      caption: 'Corte limpio con cover',
      alt: 'Cereal de cacao en primer plano',
    },
    {
      webp: '/assets/img/slider/04/Bivvo04.webp',
      src: '/assets/img/slider/04/Bivvo04.webp',
      title: 'Bowl con Frutas',
      caption: 'Ideal para catálogo',
      alt: 'Bowl con frutas y cereal de cacao',
    },
  ];

  trackBySrc = (_: number, img: GalleryImage) => img.webp ?? img.src;
}
