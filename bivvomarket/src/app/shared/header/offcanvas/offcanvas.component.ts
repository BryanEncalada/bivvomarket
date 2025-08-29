import { Component, HostListener } from '@angular/core';
import { IMobileMenu } from '../../types/menu-d-t';
import { mobile_menus } from '../../data/menu-data';
import { UtilsService } from '../../services/utils.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { Router} from '@angular/router';

@Component({
  selector: 'app-offcanvas',
  imports: [CommonModule, RouterLink, TranslocoModule],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.scss',
})
export class OffcanvasComponent {

  constructor(public utilsService: UtilsService, private router: Router) { }

  mobile_menus: IMobileMenu[] = mobile_menus;

  activeMenu: string = "";

  handleOpenMenu(navTitle: string) {
    if (navTitle === this.activeMenu) {
      this.activeMenu = "";
    } else {
      this.activeMenu = navTitle;
    }
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

}
