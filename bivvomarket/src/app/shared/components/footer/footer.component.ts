import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import social_links, { ISocial } from '../../data/social-data';

@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

@Input() box_style: Boolean = false;
  public social_links: ISocial[] = social_links;

}
