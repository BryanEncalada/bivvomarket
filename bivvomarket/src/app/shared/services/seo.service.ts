import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export type OgType = 'website' | 'article' | 'product';

export interface SeoMeta {
  title?: string;
  description?: string;
  url?: string;
  image?: string; // 1200x630 recomendado
  type?: OgType; // <-- ahora acepta 'product'
  robots?: string; // <-- añadimos robots (p.ej. "noindex,nofollow")
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  update(meta: SeoMeta) {
    const {
      title = 'Bivvo Market',
      description = 'Snacks naturales con quinoa y cacao.',
      url = 'https://bivvomarket.com/',
      image = 'https://bivvomarket.com/assets/og/og-image.jpg',
      type = 'website',
      robots,
    } = meta;

    // Title & Description
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    // Twitter
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // Robots (opcional)
    if (robots) this.meta.updateTag({ name: 'robots', content: robots });

    // Canonical
    this.setCanonical(url);
  }

  setCanonical(url: string) {
    let link = this.doc.querySelector(
      "link[rel='canonical']"
    ) as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
