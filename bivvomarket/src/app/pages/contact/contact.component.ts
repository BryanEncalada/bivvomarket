import { Component } from '@angular/core';
import { BreadcrumbOneComponent } from '../../shared/breadcrumb/breadcrumb-one/breadcrumb-one.component';
import { ContactFormComponent } from '../../shared/components/forms/contact-form/contact-form.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-contact',
  imports: [BreadcrumbOneComponent, ContactFormComponent, TranslocoModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
