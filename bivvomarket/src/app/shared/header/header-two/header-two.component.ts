import { Component, HostListener, Input } from '@angular/core';
import { NavManusComponent } from "../nav-manus/nav-manus.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
  imports: [NavManusComponent,CommonModule]

})
export class HeaderTwoComponent {

  @Input () header_big = false;
  @Input () white_bg = false;
  @Input () transparent = false;


  public sticky: boolean = false;

  constructor(
   
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
