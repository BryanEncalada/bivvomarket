import { Component } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { ProductDetailsUpperComponent } from '../../../shop/components/product-details-upper/product-details-upper.component';
import { NgIf } from '@angular/common';
//import { UtilsService } from 'src/app/shared/services/utils.service';


@Component({
  selector: 'app-product-modal',
  imports: [NgIf, ProductDetailsUpperComponent],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent {

  constructor(public utilsService: UtilsService) { 


    
  }


}
