import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-seccion',
  imports: [CommonModule],
  templateUrl: './titulo-seccion.component.html',
  styleUrl: './titulo-seccion.component.scss',
})
export class TituloSeccionComponent {
  @Input() Titulo1!: string;
  @Input() desc1!: string;
  @Input() colorFondo: string = '#fdd1c4';
  @Input() colorTexto: string = '#225e26';
  ngOnInit() {
    //console.log(this.Titulo1);
  }
}
