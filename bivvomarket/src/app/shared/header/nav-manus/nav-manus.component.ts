import { Component } from '@angular/core';
import { IMenuType } from '../../types/menu-d-t';
import menuData from '../../data/menu-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-manus',
 imports: [CommonModule, RouterModule],
  templateUrl: './nav-manus.component.html',
  styleUrl: './nav-manus.component.scss'
})
export class NavManusComponent {
  public menu_data:IMenuType[] = menuData;

  bg: string = '/assets/img/bg/mega-menu-bg.jpg';

  getMenuClasses(item: IMenuType): string {
    const classes = [];
    if (item.hasDropdown && !item.megamenu) {
      classes.push('active', 'has-dropdown');
<<<<<<< HEAD
      //console.log("classes.push('active', 'has-dropdown');")
    } else if (item.megamenu) {
      classes.push('mega-menu', 'has-dropdown');
        // console.log("classes.push('mega-menu', 'has-dropdown');")
=======
      
    } else if (item.megamenu) {
      classes.push('mega-menu', 'has-dropdown');
     
>>>>>>> parent of de8cabc (Franco_shop)
    }
    return classes.join(' ');
  }
}