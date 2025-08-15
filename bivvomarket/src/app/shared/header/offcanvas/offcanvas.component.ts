import { Component, HostListener } from '@angular/core';
import { IMobileMenu } from '../../types/menu-d-t';
import { mobile_menus } from '../../data/menu-data';
import { UtilsService } from '../../services/utils.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-offcanvas',
  imports: [CommonModule, RouterLink],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.scss',
})
export class OffcanvasComponent {
  mobile_menus: IMobileMenu[] = mobile_menus;
  activeMenu: string | null = null;

  constructor(public utilsService: UtilsService) {}

  // Abre/cierra submenú
  toggle(title: string) {
    this.activeMenu = this.activeMenu === title ? null : title;
  }

  // Cerrar panel completo
  closeOffcanvas() {
    this.utilsService.close();
    this.activeMenu = null;
  }

  // Accesibilidad: cerrar con ESC
  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.utilsService.openMobileMenus) this.closeOffcanvas();
  }

  // trackBy para no re-renderizar toda la lista
  trackByTitle = (_: number, item: IMobileMenu) => item.title;
}
