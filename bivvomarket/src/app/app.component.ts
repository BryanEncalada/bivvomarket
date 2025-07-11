import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTwoComponent } from './shared/header/header-two/header-two.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HeaderTwoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'bivvomarket';
}
