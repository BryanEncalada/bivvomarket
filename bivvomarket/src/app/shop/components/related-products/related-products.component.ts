import { Component, DestroyRef, inject, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../../shared/services/product.service';
import { TranslocoModule } from '@jsverse/transloco';
import { IProduct } from '../../../shared/types/IProduct';
import { catchError, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-related-products',
  imports: [ProductItemComponent, NgFor, TranslocoModule, NgIf],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss',
})
export class RelatedProductsComponent {
  @Input() productId?: string;
  @Input() brand?: string;

  related_products: IProduct[] = [];
  loading = false;
  errorMsg = '';

  private destroyRef = inject(DestroyRef);

  constructor(private productService: ProductService) {}

  ngOnInit() {
    console.group('[RelatedProductsComponent] ngOnInit');

    // 1) Log de entradas
    console.log('Inputs =>', {
      productId: this.productId,
      brand: this.brand,
    });

    this.loading = true;

    const getId = (p: IProduct) =>
      (p as any).id ??
      (p as any)._id ??
      (p as any).slug ??
      (p as any).sku ??
      null;

    this.productService.products
      .pipe(
        // 2) Log de respuesta cruda del servicio
        tap((items) => {
          console.group('[Stage] Servicio .products');
          console.log('Tipo:', Array.isArray(items) ? 'Array' : typeof items);
          console.log(
            'Total items recibidos:',
            Array.isArray(items) ? items.length : 'N/A'
          );
          if (Array.isArray(items) && items.length) {
            console.log('Ejemplo[0]:', items[0]);
          }
          console.groupEnd();
        }),

        // 3) Mapeo + logs del filtrado
        map((items: IProduct[]) => {
          if (!Array.isArray(items)) {
            console.error('Error: el servicio .products NO devolvió un array.');
            return [];
          }

          const currentId = this.productId ?? null;

          console.group('[Stage] Filtrado');
          console.log('brand objetivo:', this.brand);
          console.log('productId actual (a excluir):', currentId);

          // Log de marcas e ids (primeros N para no saturar)
          const sample = items.slice(0, 10).map((p, i) => ({
            i,
            brand: (p as any).brand,
            id: getId(p),
          }));
          console.table(sample);

          const filtered = items.filter((p) => {
            const okBrand = (p as any).brand === this.brand;
            const pid = getId(p);
            const okNotSame = !currentId || pid !== currentId;

            if (!okBrand || !okNotSame) {
              // Descomenta si quieres ver todos los descartes
              // console.debug('Descartado:', { pid, brand: (p as any).brand, okBrand, okNotSame });
            }

            return okBrand && okNotSame;
          });

          console.log(
            'Coincidencias por brand (antes de slice):',
            filtered.length
          );

          const top4 = filtered.slice(0, 4);
          console.log('Tomados (slice 0..4):', top4.length);
          if (top4.length) {
            console.log('top4[0]:', top4[0]);
          }
          console.groupEnd();

          return top4;
        }),

        // 4) Logs de error de la cadena RxJS
        catchError((err) => {
          this.errorMsg = 'No se pudieron cargar los productos relacionados.';
          console.group('[Stage] catchError');
          console.error('HTTP/Service error =>', err);
          console.groupEnd();
          return of([] as IProduct[]);
        })
      )
      .subscribe({
        next: (products) => {
          console.group('[Stage] subscribe(next)');
          console.log('Productos resultantes:', products.length);
          if (products.length) {
            console.table(
              products.map((p) => ({
                id: getId(p),
                brand: (p as any).brand,
                name: (p as any).name ?? (p as any).title ?? '',
              }))
            );
          }
          console.groupEnd();

          this.related_products = products;
          this.loading = false;
        },
        error: (err) => {
          console.group('[Stage] subscribe(error)');
          console.error('Sorpresa: error en subscribe =>', err);
          console.groupEnd();
          this.loading = false;
        },
        complete: () => {
          console.log('[Stage] subscribe(complete)');
          console.groupEnd();
        },
      });
  }
}
