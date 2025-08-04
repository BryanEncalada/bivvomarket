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
      title: 'Alto en proteínas',
      subtitle: 'Fuente natural',
      svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>`,
    },
    {
      title: 'Producto Premium',
      subtitle: 'Calidad garantizada',
      svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6" /><path d="M8 15l-2 5 6-3 6 3-2-5" /></svg>`,
    },
    {
      title: 'Alto en proteínas',
      subtitle: 'Fuente natural',
      svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>`,
    },
    {
      title: 'Producto Premium',
      subtitle: 'Calidad garantizada',
      svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb3a11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6" /><path d="M8 15l-2 5 6-3 6 3-2-5" /></svg>`,
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
