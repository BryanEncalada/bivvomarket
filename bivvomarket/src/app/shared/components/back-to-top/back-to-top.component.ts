import { Component, HostListener } from '@angular/core';

@Component({
   standalone: false,
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent {
  scrollDisplay: string = 'none';

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrollDisplay = window.scrollY > 200 ? 'block' : 'none';
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
