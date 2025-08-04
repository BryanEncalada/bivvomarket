import { Component, Input } from '@angular/core';
import { WaveDividerComponent } from '../wave-divider/wave-divider.component';
import { TranslocoModule } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caracteristicas',
  imports: [TranslocoModule, CommonModule],
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.scss',
})
export class CaracteristicasComponent {
  @Input() colorFondo: string = '#fdd1c4';
}
