import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTwoComponent } from './shared/header/header-two/header-two.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductModalComponent } from './shared/modal/product-modal/product-modal.component';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HeaderTwoComponent, FooterComponent, ProductModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'bivvomarket';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'auto' }); // 👈 scroll inmediato al tope
    });
  }

}
