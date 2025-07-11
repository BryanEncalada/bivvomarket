import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { importProvidersFrom } from '@angular/core';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, {
//   providers: [
//     ...(appConfig.providers || []), //  combinas los providers del appConfig
//     provideRouter(routes),
//     importProvidersFrom(BrowserAnimationsModule),
//     provideToastr(), // esto es fundamental
//   ],
// });

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes),
//     importProvidersFrom(BrowserAnimationsModule),
//   ],
// });

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
  ],
});