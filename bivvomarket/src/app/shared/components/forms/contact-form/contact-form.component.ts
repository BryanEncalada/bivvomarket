import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CorreoService } from '../../../services/correo.service';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  public contactForm!: FormGroup;
  public formSubmitted = false;

  constructor(private correo: CorreoService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {

      const formData = {
        to: this.contactForm.value.email,
        name: this.contactForm.value.name,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
      }

      this.correo.enviarCorreo(formData).subscribe({
        next: (data) => {



        },
        error: (err) => {
          window.alert('No se ha podido enviar el correo, intentalo de nuevo');
          //console.log(err);
        },
        complete: () => {

        }
      });

      // Reset the form
      this.contactForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }

  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }
}
