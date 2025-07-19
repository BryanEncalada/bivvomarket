import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wave-divider',
  imports: [CommonModule],
  templateUrl: './wave-divider.component.html',
  styleUrl: './wave-divider.component.scss',
})
export class WaveDividerComponent {
  @Input() position: 'top' | 'bottom' = 'bottom';
  @Input() color: string = '#ffffff';
  @Input() height: string = '60px';
}
