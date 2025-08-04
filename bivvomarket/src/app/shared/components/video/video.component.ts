import { Component, Input } from '@angular/core';
import { WaveDividerComponent } from '../wave-divider/wave-divider.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-video',
  imports: [TranslocoModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  @Input() colorFondo: string = '#fdd1c4';
}
