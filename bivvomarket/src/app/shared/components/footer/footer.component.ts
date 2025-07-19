import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import social_links, { ISocial } from '../../data/social-data';
import { WaveDividerComponent } from '../wave-divider/wave-divider.component';

@Component({
  selector: 'app-footer',
  imports: [NgFor, WaveDividerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() box_style: Boolean = false;
  public social_links: ISocial[] = social_links;
}
