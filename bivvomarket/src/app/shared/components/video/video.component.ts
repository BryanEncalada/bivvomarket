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
  gridHeight: string = '400px';
  @Input() colorFondo: string = '#fdd1c4';
  iconosDerecha = [
    {
      title: 'Energizante',
      subtitle: 'Cómelo como cereal',
      svg: `<svg  xmlns="http://www.w3.org/2000/svg"  stroke="#225e26"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-treadmill"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M3 14l4 1l.5 -.5" /><path d="M12 18v-3l-3 -2.923l.75 -5.077" /><path d="M6 10v-2l4 -1l2.5 2.5l2.5 .5" /><path d="M21 22a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1" /><path d="M18 21l1 -11l2 -1" /></svg>`, // icono tipo "trigo/energía"
    },
    {
      title: 'Portable',
      subtitle: 'Llévalo contigo',
      svg: `<svg  xmlns="http://www.w3.org/2000/svg"  stroke="#225e26"  width="54"  height="54"   viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-paper-bag"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v5.82a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-3a2 2 0 0 1 2 -2z" /><path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" /><path d="M11 7h2" /></svg>`, // icono tipo "bolsa o barra snack"
    },
    {
      title: 'Versátil',
      subtitle: 'Mézclalo en un batido',
      svg: `<svg  xmlns="http://www.w3.org/2000/svg"   stroke="#225e26"  width="54"  height="54" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bubble-tea"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17.95 9l-1.478 8.69c-.25 1.463 -.374 2.195 -.936 2.631c-1.2 .931 -6.039 .88 -7.172 0c-.562 -.436 -.687 -1.168 -.936 -2.632l-1.478 -8.689" /><path d="M6 9l.514 -1.286a5.908 5.908 0 0 1 10.972 0l.514 1.286" /><path d="M5 9h14" /><path d="M12 9l4 -7" /><path d="M10.01 14h.01" /><path d="M11.02 18h.01" /><path d="M13.02 16h.01" /></svg>`, // icono de vaso/batido
    },
    {
      title: 'Nutritivo',
      subtitle: 'Mezclalo con todo',
      svg: `<svg  xmlns="http://www.w3.org/2000/svg"   stroke="#225e26"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bowl-spoon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" /><path d="M8 7c1.657 0 3 -.895 3 -2s-1.343 -2 -3 -2s-3 .895 -3 2s1.343 2 3 2" /><path d="M11 5h9" /></svg>`, // icono tipo tazón/yogur
    },
  ];
}
