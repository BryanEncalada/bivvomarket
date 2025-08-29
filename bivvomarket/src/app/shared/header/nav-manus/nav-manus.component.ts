import { Component } from '@angular/core';
import { IMenuType } from '../../types/menu-d-t';
import menuData from '../../data/menu-data';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { IProduct } from '../../types/IProduct';

@Component({
  selector: 'app-nav-manus',
  imports: [CommonModule, RouterModule, TranslocoModule],
  templateUrl: './nav-manus.component.html',
  styleUrl: './nav-manus.component.scss',
})
export class NavManusComponent {

  public menu_data: IMenuType[] = menuData;
  public products$: Observable<IProduct[]> | undefined;
  public gruposCategoria: String[] = [];
  public imgOver: string = '/assets/img/shop/HojaVerde.png';

  constructor(public productService: ProductService, private router: Router) {
    this.products$ = this.productService.products;

    // Llenar dinámicamente el menú "Productos"
    this.products$.subscribe((prods) => {
      const productosMenu = this.menu_data.find((m) => m.title === 'Productos');

      if (productosMenu) {

        prods.forEach((p) => {
          const categoria: string = p.category.toUpperCase();
          if (!this.gruposCategoria.find(f => f === categoria)) {
            this.gruposCategoria.push(categoria);
          }
        });

        productosMenu.dropdownItems = prods.map((p) =>
        ({
          link: `/shop/shop-details/${p._id}`, // ajusta según tu API
          title: p.title, // ajusta según tu modelo
          categoria: p.category.toUpperCase(), // ajusta según tu modelo
          img: p.img
        })
        );



      }
    });
  }

  bg: string = '#f5f5f5';

  getMenuClasses(item: IMenuType): string {
    const classes = [];
    if (item.hasDropdown && !item.megamenu) {
      classes.push('active', 'has-dropdown');
      //console.log("classes.push('active', 'has-dropdown');")
    } else if (item.megamenu) {
      classes.push('mega-menu', 'has-dropdown');
      // console.log("classes.push('mega-menu', 'has-dropdown');")
    }
    return classes.join(' ');
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);

    if (el) {

      // Altura de tu menú fijo
      const menuHeight = 80; // ajusta según tu header

      // Posición del elemento en la página
      const y = el.getBoundingClientRect().top + window.scrollY - menuHeight;

      //el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }


  goToSection(page: string, id: string, event?: Event) {

    if (event) {
      event.preventDefault(); // evita el salto automático del <a>
    }

    const currentUrl = this.router.url;


    if (currentUrl === '/' || currentUrl.startsWith('/#')) {
      this.scrollTo(id);
      return; // ya estamos en la página principal, solo hacemos scroll
    }

    this.router.navigate([page]).then(() => {
      // esperamos a que el DOM termine de pintar
      setTimeout(() => {
        this.scrollTo(id);
      }, 700); // ajusta el tiempo si tu vista tarda más en cargar
    });
  }


  cambiarImagen(img: string) {
    this.imgOver = img;

  }

}
