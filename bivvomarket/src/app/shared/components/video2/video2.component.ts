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
      svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#225e26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 12c-1-2-2-3-4-4 0 2 1 3 1 5" /><path d="M12 12c1-2 3-3 4-4 0 2-1 3-1 5" /></svg>`,
    },
    {
      title: 'Hermético',
      subtitle: 'Conserva frescura',
      svg: `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#225e26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 16c0-2 2-4 4-6 2 2 4 4 4 6" /></svg>`,
    },
  ];
  iconosDerecha = [
    {
      title: 'Refrescante',
      subtitle: 'Disfrútalo frío y natural',
      svg: `<svg  xmlns="http://www.w3.org/2000/svg"  stroke="#225e26"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bottle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" /><path d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537" /><path d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805" /></svg>`, // icono tipo vaso de jugo
    },
    {
      title: 'Energético',
      subtitle: 'Carga tu cuerpo de energía',
      svg: `<svg  xmlns="http://www.w3.org/2000/svg"  stroke="#225e26"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-barbell"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12h1" /><path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" /><path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M9 12h6" /><path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" /><path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" /><path d="M22 12h-1" /></svg>`, // icono tipo rayo
    },
    {
      title: 'Vitaminado',
      subtitle: 'Llena tu día de vitaminas',
      svg: `<svg  xmlns="http://www.w3.org/2000/svg"  stroke="#225e26"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-stretching"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M5 20l5 -.5l1 -2" /><path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" /></svg>`, // icono tipo fruta cortada
    },
    {
      title: 'Saludable',
      subtitle: 'Natural y sin añadidos',
      svg: `<svg  xmlns="http://www.w3.org/2000/svg"   stroke="#225e26"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heartbeat"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" /><path d="M3 13h2l2 3l2 -6l1 3h3" /></svg>`, // icono tipo fruta saludable
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
