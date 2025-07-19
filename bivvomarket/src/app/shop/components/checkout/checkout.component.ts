import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, NgIf, NgFor, TranslocoModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {


  public isOpenLogin = false;
  public isOpenCoupon = false;
  public shipCost: number = 0;
  public couponCode: string = '';
  public payment_name: string = '';

  constructor(public cartService: CartService) { }

  handleOpenLogin() {
    this.isOpenLogin = !this.isOpenLogin;
  }
  handleOpenCoupon() {
    this.isOpenCoupon = !this.isOpenCoupon;
  }

  handleShippingCost(value: number | string) {
    if (value === 'free') {
      this.shipCost = 0;
    } else {
      this.shipCost = value as number;
    }
  }



  handleCouponSubmit() {
    console.log(this.couponCode);
    // Add coupon code handling logic here
    if (this.couponCode) {
      // logic here

      // when submitted the from than empty will be coupon code
      this.couponCode = ''
    }
  }

  // handle payment item
  handlePayment(value: string) {
    this.payment_name = value
  }

  public checkoutForm!: FormGroup;
  public formSubmitted = false;


  ngOnInit() {

    this.checkoutForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      company: new FormControl(null),
      country: new FormControl('bangladesh', Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      apartment: new FormControl(null, Validators.required),
      zipCode: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      orderNote: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  onSubmit() {

    this.formSubmitted = true;
    if (this.checkoutForm.valid) {
      console.log('checkout-form-value', this.checkoutForm.value);
      //this.toastrService.success(`Order successfully`);

      // Reset the form
      //this.checkoutForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false

      //  INICIO WHATSAPPS

      const productos = this.cartService.getCartProducts();

      let mensaje: string = 'Hola, estoy interesado en los siguientes productos:\n';
      for (const producto of productos) {
        mensaje += ` *${producto.title} - ${producto.price}* \n`;
      }

      // Agregar datos del cliente desde el formulario
      const nombre = `*${this.checkoutForm.value.firstName}  ${this.checkoutForm.value.lastName}*`;
      const email = `*${this.checkoutForm.value.email}*`;
      mensaje += `\nMi nombre es: ${nombre}\nMi correo es: ${email}`;

      const telefono = '51941712238'; // Reemplaza con tu número, incluye el código de país

      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;


      console.log('checkout-form', this.checkoutForm.value);

      window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña

      //  FIN WHATSAPPS

    }

  }

  get firstName() { return this.checkoutForm.get('firstName') }
  get lastName() { return this.checkoutForm.get('lastName') }
  get company() { return this.checkoutForm.get('company') }
  get country() { return this.checkoutForm.get('country') }
  get address() { return this.checkoutForm.get('address') }
  get city() { return this.checkoutForm.get('city') }
  get state() { return this.checkoutForm.get('state') }
  get apartment() { return this.checkoutForm.get('apartment') }
  get zipCode() { return this.checkoutForm.get('zipCode') }
  get phone() { return this.checkoutForm.get('phone') }
  get orderNote() { return this.checkoutForm.get('orderNote') }
  get email() { return this.checkoutForm.get('email') }


}
