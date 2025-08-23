import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TituloSeccionComponent } from '../../../shared/components/titulo-seccion/titulo-seccion.component';
import { TranslocoModule } from '@jsverse/transloco';
import { EspaciadorComponent } from '../../../shared/components/espaciador/espaciador.component';

interface FotoItem {
  src: string;
  alt: string;
  caption?: string;
}

@Component({
  selector: 'app-empresas',
  imports: [
    CommonModule,
    TituloSeccionComponent,
    TranslocoModule,

    TranslocoModule,
  ],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.scss',
})
export class EmpresasComponent {
  fotos: FotoItem[] = [
    {
      src: 'assets/img/empresa/zanahoria.jpg',
      alt: 'La Sanahoria',
      caption: 'La Sanahoria',
    },
    {
      src: 'assets/img/empresa/feria_nativa.jpg',
      alt: 'Feria Nativa',
      caption: 'Feria Nativa',
    },
    {
      src: 'assets/img/empresa/lineazero.jpg',
      alt: 'Linea Zero',
      caption: 'Linea Zero',
    },
    {
      src: 'assets/img/empresa/loscaseros.jpg',
      alt: 'Los Caseros',
      caption: 'Los Caseros',
    },
    {
      src: 'assets/img/empresa/madrenaturaperu.jpg',
      alt: 'Madre Natura Peru',
      caption: 'Madre Natura Peru',
    },
    {
      src: 'assets/img/empresa/naturLife.jpg',
      alt: 'Producto 6',
      caption: 'naturLife',
    },
    {
      src: 'assets/img/empresa/nunaorganica.jpg',
      alt: 'Nuna Organica',
      caption: 'Nuna Organica',
    },
    {
      src: 'assets/img/empresa/wasainatural.jpg',
      alt: 'Wasai Natural',
      caption: 'Wasai Natural',
    },
    {
      src: 'assets/img/empresa/alpaku.jpg',
      alt: 'Alpaku',
      caption: 'Alpaku',
    },
  ];

  trackBySrc(index: number, item: any): string {
    return item.src; // aquí le dices a Angular cómo identificar cada foto
  }
}
