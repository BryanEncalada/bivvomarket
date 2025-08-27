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
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductComponent } from './pages/product/product.component';

const DEFAULT_OG = 'https://bivvomarket.com/assets/og/default.jpg';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeTwoComponent,
    title: 'Inicio | Bivvo Market',
    data: {
      title: 'Inicio | Bivvo Market',
      description:
        'Disfruta snacks naturales de quinoa y cacao. Descubre promociones, novedades y compra en línea en Bivvo Market.',
      image: 'https://bivvomarket.com/assets/og/home.jpg',
      type: 'website',
    },
  },

  // Catálogo / listado general (si esta ruta muestra lista de productos)
  {
    path: 'shop-details',
    component: ShopDetailsComponent,
    title: 'Catálogo de productos | Bivvo Market',
    data: {
      title: 'Catálogo de productos | Bivvo Market',
      description:
        'Explora nuestro catálogo de snacks naturales: quinoa pops, granolas y más.',
      image: 'https://bivvomarket.com/assets/og/catalogo.jpg',
      type: 'website',
    },
  },

  // Página estática de “Productos” (si es una landing/sección de productos)
  {
    path: 'pages/producto',
    component: ProductComponent,
    title: 'Productos | Bivvo Market',
    data: {
      title: 'Productos | Bivvo Market',
      description:
        'Conoce nuestra línea de productos naturales con quinoa: opciones nutritivas para tu día.',
      image: 'https://bivvomarket.com/assets/og/productos.jpg',
      type: 'website',
    },
  },

  // Ficha de producto dinámica
  {
    path: 'shop/shop-details/:id',
    component: DynamicShopDetailsComponent,
    title: 'Detalle del producto | Bivvo Market',
    data: {
      // Estos son "fallbacks". Al cargar el producto desde API,
      // usa SeoService.update(...) para poner title/description/image reales.
      title: 'Detalle del producto | Bivvo Market',
      description:
        'Conoce la información del producto: ingredientes, beneficios y presentación.',
      image: 'https://bivvomarket.com/assets/og/producto.jpg',
      type: 'product',
      prerender: false,
    },
  },

  // Carrito (normalmente no SEO, pero dejamos algo básico)
  {
    path: 'shop/cart',
    component: CartComponent,
    title: 'Carrito de compras | Bivvo Market',
    data: {
      title: 'Carrito de compras | Bivvo Market',
      description:
        'Revisa los productos añadidos a tu carrito antes de completar la compra.',
      image: DEFAULT_OG,
      type: 'website',
      // Opcional: podrías marcar robots noindex desde tu SeoService si lo soportas
    },
  },

  // Checkout (similar a cart; posible noindex si lo manejas)
  {
    path: 'shop/checkout',
    component: CheckoutComponent,
    title: 'Finalizar compra | Bivvo Market',
    data: {
      title: 'Finalizar compra | Bivvo Market',
      description: 'Completa tus datos y realiza el pago de manera segura.',
      image: DEFAULT_OG,
      type: 'website',
    },
  },

  // Contacto
  {
    path: 'pages/contact',
    component: ContactComponent,
    title: 'Contáctanos | Bivvo Market',
    data: {
      title: 'Contacto | Bivvo Market',
      description: '¿Tienes dudas o pedidos? Escríbenos y conversemos.',
      image: 'https://bivvomarket.com/assets/og/contacto.jpg',
      type: 'website',
    },
  },

  // Nosotros
  {
    path: 'pages/nosotros',
    component: NosotrosComponent,
    title: 'Sobre nosotros | Bivvo Market',
    data: {
      title: 'Sobre nosotros | Bivvo Market',
      description:
        'Somos una marca peruana comprometida con snacks naturales y nutritivos.',
      image: 'https://bivvomarket.com/assets/og/nosotros.jpg',
      type: 'website',
    },
  },

  // Términos y condiciones
  {
    path: 'pages/terminos',
    component: TermsAndConditionsComponent,
    title: 'Términos y condiciones | Bivvo Market',
    data: {
      title: 'Términos y condiciones | Bivvo Market',
      description:
        'Consulta los términos y condiciones de uso de nuestro sitio y servicios.',
      image: DEFAULT_OG,
      type: 'website',
    },
  },

  // Privacidad
  {
    path: 'pages/privacidad',
    component: PrivacyComponent,
    title: 'Política de privacidad | Bivvo Market',
    data: {
      title: 'Política de privacidad | Bivvo Market',
      description: 'Conoce cómo protegemos y tratamos tus datos personales.',
      image: DEFAULT_OG,
      type: 'website',
    },
  },

  { path: '**', redirectTo: '' },
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
