// shared/seo-route-listener.ts
import {
  inject,
  APP_INITIALIZER,
  makeEnvironmentProviders,
  EnvironmentProviders,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService, OgType } from './services/seo.service';

type SeoData = {
  title?: string;
  description?: string;
  image?: string;
  type?: OgType;
  robots?: string;
};

export function provideSeoRouteListener(baseUrl: string): EnvironmentProviders {
  const initFactory = () => {
    const router = inject(Router);
    const root = inject(ActivatedRoute);
    const seo = inject(SeoService);

    const apply = () => {
      let r: ActivatedRoute = root;
      while (r.firstChild) r = r.firstChild;
      const snap = r.snapshot;
      const data = (snap.data || {}) as SeoData;

      // Soporta routeConfig.title y data.title
      const routeTitle =
        typeof snap.routeConfig?.title === 'string'
          ? snap.routeConfig.title
          : (snap.data?.['title'] as string | undefined);

      const title = routeTitle ?? data.title;

      const url = new URL(router.url || '/', baseUrl).toString();

      if (title || data.description || data.image || data.type || data.robots) {
        seo.update({
          title,
          description: data.description,
          image: data.image,
          type: (data.type ?? 'website') as OgType,
          robots: data.robots,
          url,
        });
      }
    };

    // Ejecuta una vez (primer render) y en cada navegación
    return () => {
      apply();
      router.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe(() => apply());
    };
  };

  // Retorna providers válidos para appConfig.providers
  return makeEnvironmentProviders([
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initFactory,
    },
  ]);
}
