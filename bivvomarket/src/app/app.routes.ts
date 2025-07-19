import { RouterModule, Routes } from '@angular/router';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';
import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeTwoComponent } from './home/home-two/home-two.component';
import { DynamicShopDetailsComponent } from './shop/components/dynamic-shop-details/dynamic-shop-details.component';
import { ContactComponent } from './pages/contact/contact.component';
<<<<<<< Updated upstream
import { ShopDetailsComponent } from './shop/components/shop-details/shop-details.component';
import { CartComponent } from './shop/components/cart/cart.component';
import { CheckoutComponent } from './shop/components/checkout/checkout.component';
=======
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
>>>>>>> Stashed changes

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeTwoComponent,
    title: 'component: HomeTwoComponent',
  },
  {
    path: 'shop/shop-details/:id',
    component: DynamicShopDetailsComponent,
    title: 'Shop Details Page',
  },
  {
    path:'shop-details',
    component:ShopDetailsComponent,
    title:'Shop Details Page'
  }, 
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contacto',
  },
  {
<<<<<<< Updated upstream
    path:'shop/cart',
    component:CartComponent,
    title:'Shop Cart Page'
  },
   {
    path:'shop/checkout',
    component:CheckoutComponent,
    title:'Check Out'
=======
    path: 'terminos',
    component: TermsAndConditionsComponent,
    title: 'Terminos y condiciones',
  },
  {
    path: 'privacidad',
    component: PrivacyComponent,
    title: 'Politica de privacidad',
>>>>>>> Stashed changes
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
  declarations: [], // Add ResourcesComponent to declarations
  providers: [provideClientHydration()],
})
export class AppRoutingModule {}
