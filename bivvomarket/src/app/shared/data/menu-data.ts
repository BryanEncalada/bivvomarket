import { IMenuType, IMobileMenu } from '../types/menu-d-t';

const menuData: IMenuType[] = [
  {
    link: '/',
    title: 'Inicio',
  },
  {
    link: '/pages/nosotros',
    title: 'Nosotros',
  },
  {
    link: '/#sProductos',
    title: 'Productos',
    hasDropdown: true,
    megamenu: true,
    href: true,
    dropdownItems: [
      { link: '//shop/shop-details/1', title: 'Cacao Pop de Quinoa' },
      { link: '//shop/shop-details/2', title: 'Miel Pop de Quinoa' },
      { link: '//shop/shop-details/3', title: 'Paletas Originales De Quinua' },
      { link: '//shop/shop-details/4', title: 'Bundle pack (all 3 products)' },
      { link: '//shop/shop-details/5', title: 'Paletas De Cacao Y Quinoa' },
      { link: '//shop/shop-details/6', title: '3-Pack Honey Flavor' },
      { link: '//shop/shop-details/7', title: 'Jarabe Frutado de Mango 1KG' },
      { link: '//shop/shop-details/8', title: 'Jarabe Frutado de Fresa 1KG' },
      {
        link: '//shop/shop-details/9',
        title: 'Jarabe Frutado de Maracuyá 1KG',
      },
    ],
  },
  {
    link: '/#sRecetas',
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
    link: '/pages/contact',
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
