import { Component, Input } from '@angular/core';
import { ICategoryType } from '../../shared/types/category-d-t';
import category_data from '../../shared/data/category-data';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../shared/services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-category',
  imports: [CommonModule,RouterModule ],
  templateUrl: './shop-category.component.html',
  styleUrl: './shop-category.component.scss'
})
export class ShopCategoryComponent {

  @Input() style_2:Boolean = false;
  @Input() style_3:Boolean = false;
  @Input() style_4:Boolean = false;
  @Input() shop_category_2:Boolean = false;
  public category_data:ICategoryType[] = category_data;

  constructor(public utilsService:UtilsService){}
}
