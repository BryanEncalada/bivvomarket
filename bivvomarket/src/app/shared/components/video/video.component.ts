import { Component, Input } from '@angular/core';
import { WaveDividerComponent } from '../wave-divider/wave-divider.component';
import { TranslocoModule } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { CaracteristicasComponent } from '../caracteristicas/caracteristicas.component';

@Component({
  selector: 'app-video',
  imports: [TranslocoModule, CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  @Input() colorFondo: string = '#fdd1c4';
}
