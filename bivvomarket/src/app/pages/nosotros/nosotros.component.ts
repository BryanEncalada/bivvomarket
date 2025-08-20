import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconGridComponent } from '../../shared/components/icon-grid/icon-grid.component';
import { TituloSeccionComponent } from '../../shared/components/titulo-seccion/titulo-seccion.component';
import { TranslocoModule } from '@jsverse/transloco';
import { BreadcrumbOneComponent } from '../../shared/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { VideoComponent } from '../../shared/components/video/video.component';
import { EspaciadorComponent } from '../../shared/components/espaciador/espaciador.component';
import { ResenaComponent } from '../../cliente/components/resena/resena.component';

@Component({
  selector: 'app-nosotros',
  imports: [
    CommonModule,
    IconGridComponent,
    TituloSeccionComponent,
    TranslocoModule,

    VideoComponent,
    EspaciadorComponent,
    ResenaComponent,
  ],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss',
})
export class NosotrosComponent {
  gridHeight: string = '400px';
  iconosDerecha = [
    {
      title: 'Respeto por la Naturaleza',
      subtitle:
        'Protegemos los recursos naturales, apostando por prácticas responsables y ecológicas',
      svg: `<svg  xmlns="http://www.w3.org/2000/svg"   stroke="#225e26"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plant"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" /><path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" /><path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" /><path d="M12 15l0 -6" /></svg>`, // icono tipo "trigo/energía"
    },
    {
      title: 'Salud Integral',
      subtitle:
        'Promovemos una nutrición consciente que fortalece cuerpo y mente de manera natural',
      svg: '<svg  xmlns="http://www.w3.org/2000/svg"   stroke="#225e26"  width="54"  height="54" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hearts"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.017 18l-2.017 2l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.153 5.784" /><path d="M15.99 20l4.197 -4.223a2.81 2.81 0 0 0 0 -3.948a2.747 2.747 0 0 0 -3.91 -.007l-.28 .282l-.279 -.283a2.747 2.747 0 0 0 -3.91 -.007a2.81 2.81 0 0 0 -.007 3.948l4.182 4.238z" /></svg>',
    },
    {
      title: 'Innovación Natural',
      subtitle:
        'Buscamos nuevas formas de ofrecer productos saludables sin perder la esencia de lo orgánico',
      svg: '<svg  xmlns="http://www.w3.org/2000/svg"  stroke="#225e26"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-globe"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M5.75 15a8.015 8.015 0 1 0 9.25 -13" /><path d="M11 17v4" /><path d="M7 21h8" /></svg>',
    },
    {
      title: 'Transparencia',
      subtitle:
        'Compartimos con claridad el origen y la calidad de nuestros productos, generando confianza',
      svg: '<svg  xmlns="http://www.w3.org/2000/svg"  stroke="#225e26"  width="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>',
    },
  ];
}
