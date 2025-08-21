import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-espaciador',
  imports: [CommonModule],
  template: `<div
    [ngStyle]="{ height: height, backgroundColor: color }"
  ></div>`,
  standalone: true,
})
export class EspaciadorComponent {
  @Input() color: string = 'transparent'; // Puedes pasar cualquier color
  @Input() height: string = '1rem'; // Ej: '50px', '5vh', '2rem', etc.
}
