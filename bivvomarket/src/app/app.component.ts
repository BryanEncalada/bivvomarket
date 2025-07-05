import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackToTopComponent } from "./shared/components/back-to-top/back-to-top.component";
import { HeaderTwoComponent } from './shared/header/header-two/header-two.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'bivvomarket';
}
