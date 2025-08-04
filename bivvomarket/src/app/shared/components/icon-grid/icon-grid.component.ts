import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-grid',
  imports: [CommonModule],
  templateUrl: './icon-grid.component.html',
  styleUrl: './icon-grid.component.scss',
  standalone: true, // ✅ ESTA LÍNEA ES CLAVE
})
export class IconGridComponent {
  @Input() items: {
    title: string;
    subtitle: string;
    svg: string; // SVG como string o puedes cambiarlo a TemplateRef si prefieres
  }[] = [];

  @Input() height?: string;
}
