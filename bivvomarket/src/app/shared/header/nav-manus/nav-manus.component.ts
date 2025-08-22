import { Component } from '@angular/core';
import { IMenuType } from '../../types/menu-d-t';
import menuData from '../../data/menu-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { ProductService } from '../../services/product.service';
import { Response, response } from 'express';
import { Observable } from 'rxjs';
import { IProduct } from '../../types/IProduct';

@Component({
  selector: 'app-nav-manus',
  imports: [CommonModule, RouterModule, TranslocoModule],
  templateUrl: './nav-manus.component.html',
  styleUrl: './nav-manus.component.scss',
})
export class NavManusComponent {
  public menu_data: IMenuType[] = menuData;
  public products$: Observable<IProduct[]> | undefined;

  constructor(public productService: ProductService) {
    this.products$ = this.productService.products;
  }
  sortBy(
    response: Response<any, Record<string, any>>,
    sortBy: any
  ): IProduct[] {
    throw new Error('Method not implemented.');
  }

  bg: string = 'red';

  getMenuClasses(item: IMenuType): string {
    const classes = [];
    if (item.hasDropdown && !item.megamenu) {
      classes.push('active', 'has-dropdown');
      //console.log("classes.push('active', 'has-dropdown');")
    } else if (item.megamenu) {
      classes.push('mega-menu', 'has-dropdown');
      // console.log("classes.push('mega-menu', 'has-dropdown');")
    }
    return classes.join(' ');
  }
}
