import { Component, Input } from '@angular/core';
import { ProductDetailsUpperComponent } from '../product-details-upper/product-details-upper.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { IProduct } from '../../../shared/types/IProduct';

@Component({
  selector: 'app-product-details-area',
  imports: [ProductDetailsUpperComponent, NgFor, NgClass, NgIf],
  templateUrl: './product-details-area.component.html',
  styleUrl: './product-details-area.component.scss',
})
export class ProductDetailsAreaComponent {
  @Input() product: IProduct | undefined;

  quinoaLovers: string[] = [
    'Entusiastas de la salud que desean incorporar un snack saludable a su dieta.',
    'Personas que quieren reemplazar los cereales azucarados por una alternativa saludable.',
    'Personas que necesitan algo saludable para llevar y no tienen tiempo de cocinar.',
    'Personas con intolerancia al gluten.',
    'Personas que quieren eliminar el gluten y el azúcar de su dieta.',
    'Amantes del gimnasio que entrenan y buscan un snack saludable para después del entrenamiento.',
    'Personas que buscan bajar de peso de forma saludable.',
    'Personas que desean mejorar su digestión con fibra.',
    'Personas que quieren mejorar su rendimiento físico y mental.',
    'Personas que no quieren tomar suplementos de aminoácidos esenciales, minerales, vitaminas o proteínas.',
    'Personas que solo desean consumir alimentos saludables, orgánicos y de origen ético.',
  ];

  public cssDescription: boolean = true;
  public cssAdditional: boolean = false;
  public cssCarectistica: boolean = false;

  onChange() {
    this.cssDescription = !this.cssDescription;
    this.cssAdditional = !this.cssAdditional;
    this.cssCarectistica = !this.cssCarectistica;
  }
}
