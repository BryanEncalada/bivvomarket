import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  whatsappNumber = '51953350581';
  message = 'Hola! Quisiera más información.';

  get whatsappLink() {
    const encodedMsg = encodeURIComponent(this.message);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMsg}`;
  }
}
