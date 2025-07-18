import { RouterModule, Routes } from '@angular/router';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';
import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { HomeTwoComponent } from './home/home-two/home-two.component';
import { DynamicShopDetailsComponent } from './shop/components/dynamic-shop-details/dynamic-shop-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopDetailsComponent } from './shop/components/shop-details/shop-details.component';
import { CartComponent } from './shop/components/cart/cart.component';
import { CheckoutComponent } from './shop/components/checkout/checkout.component';

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
    path:'shop/cart',
    component:CartComponent,
    title:'Shop Cart Page'
  },
   {
    path:'shop/checkout',
    component:CheckoutComponent,
    title:'Check Out'
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
