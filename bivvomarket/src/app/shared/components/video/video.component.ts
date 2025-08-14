import { Component, HostListener, Input } from '@angular/core';
import { WaveDividerComponent } from '../wave-divider/wave-divider.component';
import { TranslocoModule } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { CaracteristicasComponent } from '../caracteristicas/caracteristicas.component';
import { IconGridComponent } from '../icon-grid/icon-grid.component';

@Component({
  selector: 'app-video',
  imports: [TranslocoModule, CommonModule, IconGridComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  @Input() colorFondo: string = '#fdd1c4';
  iconosIzquierda = [
    {
      title: 'Natural',
      subtitle: 'Sin azúcar',
      svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 12c-1-2-2-3-4-4 0 2 1 3 1 5" /><path d="M12 12c1-2 3-3 4-4 0 2-1 3-1 5" /></svg>`,
    },
    {
      title: 'Hermético',
      subtitle: 'Conserva frescura',
      svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 16c0-2 2-4 4-6 2 2 4 4 4 6" /></svg>`,
    },
  ];

  iconosDerecha = [
  {
    title: 'Energizante',
    subtitle: 'Cómelo como cereal',
    svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 3h8l-1 9H5l-1-9z" />
            <path d="M9 22V12" />
            <path d="M15 9h5l-1 13h-3l-1-13z" />
            <path d="M18 22v-6" />
         </svg>` // icono tipo "trigo/energía"
  },
  {
    title: 'Portable',
    subtitle: 'Llévalo contigo como un snack',
    svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="8" width="18" height="8" rx="4" />
            <path d="M7 8V6a5 5 0 0 1 10 0v2" />
         </svg>` // icono tipo "bolsa o barra snack"
  },
  {
    title: 'Refrescante',
    subtitle: 'Mézclalo en un batido',
    svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16l-1.5 14.5a2 2 0 0 1-2 1.5H7.5a2 2 0 0 1-2-1.5L4 4z" />
            <path d="M10 4V2h4v2" />
            <path d="M8 8h8" />
         </svg>` // icono de vaso/batido
  },
  {
    title: 'Nutritivo',
    subtitle: 'Cómelo mezclado en yogur',
    svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3c-4.418 0-8 2.686-8 6v6c0 3.314 3.582 6 8 6s8-2.686 8-6V9c0-3.314-3.582-6-8-6z" />
            <path d="M8 10h8" />
         </svg>` // icono tipo tazón/yogur
  },
];


  gridHeight: string = '300px'; // altura inicial

  ngOnInit(): void {
    this.calcularAlturaResponsive();
  }

  @HostListener('window:resize')
  onResize() {
    this.calcularAlturaResponsive();
  }

  calcularAlturaResponsive() {
    const anchoPantalla = window.innerWidth;

    // Calculamos la altura como el 60% del ancho, puedes ajustar el factor
    let alturaCalculada = anchoPantalla * 0.6;

    // Limitar un rango razonable
    if (alturaCalculada < 250) alturaCalculada = 250;
    if (alturaCalculada > 520) alturaCalculada = 520;

    this.gridHeight = `${alturaCalculada}px`;
  }
}
