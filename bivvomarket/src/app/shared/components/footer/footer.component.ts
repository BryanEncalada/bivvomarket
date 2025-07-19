import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import social_links, { ISocial } from '../../data/social-data';
import { RouterModule } from '@angular/router';
<<<<<<< Updated upstream
import { WaveDividerComponent } from '../wave-divider/wave-divider.component';

@Component({
  selector: 'app-footer',
  imports: [NgFor, RouterModule, WaveDividerComponent],
=======

@Component({
  selector: 'app-footer',
  imports: [NgFor, RouterModule],
>>>>>>> Stashed changes
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() box_style: Boolean = false;
  public social_links: ISocial[] = social_links;
}
