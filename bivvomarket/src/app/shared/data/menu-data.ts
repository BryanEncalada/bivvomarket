import { IMenuType, IMobileMenu } from '../types/menu-d-t';

const menuData: IMenuType[] = [
  {
    link: '/a',
    title: 'Inicio',
    href: false,
  },
  {
    link: '/pages/nosotros',
    title: 'Nosotros',
  },
  {
    link: '/pages/producto',
    title: 'Productos',
    hasDropdown: true,
    megamenu: true,
    href: false,
    dropdownItems: [],
  },
  {
    link: '#sRecetas',
    title: 'Recetas',
    href: true,
  },

  {
    link: '/pages/contact',
    title: 'Contacto',
  },
];

export default menuData;

// mobile menus
export const mobile_menus: IMobileMenu[] = [
  {
    link: '/',
    title: 'Home',
  },

  {
    link: '/pages/nosotros',
    title: 'Nosotros',
  },
  {
    link: '/pages/producto',
    title: 'Producto',
  },
  {
    link: '/pages/contact',
    title: 'Recetas',
  },

  {
    link: 'contact',
    title: 'Contacto',
  },
];
