import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTwoComponent } from './shared/header/header-two/header-two.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductModalComponent } from './shared/modal/product-modal/product-modal.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HeaderTwoComponent, FooterComponent, ProductModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'bivvomarket';


}
