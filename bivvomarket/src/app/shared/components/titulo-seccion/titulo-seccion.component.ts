import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-seccion',
  imports: [],
  templateUrl: './titulo-seccion.component.html',
  styleUrl: './titulo-seccion.component.scss'
})
export class TituloSeccionComponent {

  @Input() Titulo1!: string;
  @Input() desc1!: string;

  ngOnInit() {
    console.log(this.Titulo1);
  }

}
