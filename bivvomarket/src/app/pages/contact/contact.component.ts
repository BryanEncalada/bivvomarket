import { Component } from '@angular/core';
import { BreadcrumbOneComponent } from '../../shared/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { ContactFormComponent } from '../../shared/components/forms/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  imports: [BreadcrumbOneComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
