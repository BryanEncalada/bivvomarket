import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

// Componentes
import { HomeTwoComponent } from './home/home-two/home-two.component';
import { DynamicShopDetailsComponent } from './shop/components/dynamic-shop-details/dynamic-shop-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopDetailsComponent } from './shop/components/shop-details/shop-details.component';
import { CartComponent } from './shop/components/cart/cart.component';
import { CheckoutComponent } from './shop/components/checkout/checkout.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeTwoComponent,
    title: 'Inicio | Bivvo Market',
  },
  {
    path: 'shop/shop-details/:id',
    component: DynamicShopDetailsComponent,
    title: 'Detalle del producto | Bivvo Market',
    data: {
      prerender: false,
    },
  },
  {
    path: 'shop/cart',
    component: CartComponent,
    title: 'Carrito de compras | Bivvo Market',
  },
  {
    path: 'shop/checkout',
    component: CheckoutComponent,
    title: 'Finalizar compra | Bivvo Market',
  },
  {
    path: 'shop-details',
    component: ShopDetailsComponent,
    title: 'Catálogo de productos | Bivvo Market',
  },
  {
    path: 'pages/contact',
    component: ContactComponent,
    title: 'Contáctanos | Bivvo Market',
  },
  {
    path: 'pages/terminos',
    component: TermsAndConditionsComponent,
    title: 'Términos y condiciones | Bivvo Market',
  },
  {
    path: 'pages/privacidad',
    component: PrivacyComponent,
    title: 'Política de privacidad | Bivvo Market',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [provideClientHydration()],
})
export class AppRoutingModule {}
