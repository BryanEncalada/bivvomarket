import { Component } from '@angular/core';
import { WaveDividerComponent } from '../wave-divider/wave-divider.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-video',
  imports: [WaveDividerComponent, TranslocoModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {}
