import { Component, HostListener, Input } from '@angular/core';
import { IconGridComponent } from '../icon-grid/icon-grid.component';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-video2',
  imports: [TranslocoModule, CommonModule, IconGridComponent],
  templateUrl: './video2.component.html',
  styleUrl: './video2.component.scss',
})
export class Video2Component {
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
    title: 'Refrescante',
    subtitle: 'Disfrútalo frío y natural',
    svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 3h16v2H4z" /> <!-- tapa de vaso -->
            <path d="M5 5h14v16H5z" /> <!-- vaso -->
            <path d="M5 12h14" /> <!-- línea de jugo dentro -->
         </svg>` // icono tipo vaso de jugo
  },
  {
    title: 'Energético',
    subtitle: 'Carga tu cuerpo de energía natural',
    svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15 11 9 11 12 22 18 11 6 11 12 2" /> <!-- rayo estilizado -->
         </svg>` // icono tipo rayo
  },
  {
    title: 'Vitaminado',
    subtitle: 'Llena tu día de vitaminas',
    svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="8" /> <!-- fruta redonda -->
            <path d="M12 4v16" /> <!-- segmento vertical -->
            <path d="M4 12h16" /> <!-- segmento horizontal -->
         </svg>` // icono tipo fruta cortada
  },
  {
    title: 'Saludable',
    subtitle: 'Natural y sin añadidos',
    svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2C8 2 4 6 4 10s4 8 8 8 8-4 8-8-4-8-8-8z" /> <!-- fruta entera -->
            <path d="M12 10v4" /> <!-- semilla vertical -->
            <path d="M10 12h4" /> <!-- semilla horizontal -->
         </svg>` // icono tipo fruta saludable
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
