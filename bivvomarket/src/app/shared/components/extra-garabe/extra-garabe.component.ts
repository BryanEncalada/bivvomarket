import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TituloSeccionComponent } from '../titulo-seccion/titulo-seccion.component';
import { TranslocoModule } from '@jsverse/transloco';
import { EspaciadorComponent } from '../espaciador/espaciador.component';

@Component({
  selector: 'app-extra-garabe',
  imports: [
    CommonModule,
    TituloSeccionComponent,
    TranslocoModule,
    EspaciadorComponent,
  ],
  templateUrl: './extra-garabe.component.html',
  styleUrl: './extra-garabe.component.scss',
})
export class ExtraGarabeComponent {}
