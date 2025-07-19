import { Component } from '@angular/core';
import { WaveDividerComponent } from '../wave-divider/wave-divider.component';

@Component({
  selector: 'app-video',
  imports: [WaveDividerComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {}
