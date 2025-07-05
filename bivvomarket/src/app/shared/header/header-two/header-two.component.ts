import { Component, HostListener } from '@angular/core';
import { NavManusComponent } from "../nav-manus/nav-manus.component";

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
  imports: [NavManusComponent]
})
export class HeaderTwoComponent {

  public sticky: boolean = false;

  constructor(
    //public cartService: CartService,
   // public utilsService: UtilsService,
  ) { }

  // sticky nav
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
