import { IMenuType, IMobileMenu } from "../types/menu-d-t";

const menuData:IMenuType[] = [
  {
    link: '/',
    title: 'Inicio',

  },
  {
    link: '/pages/contact',
    title: 'Producto',
    hasDropdown: true,
    megamenu: true,
    dropdownItems: [
      { link: '/home/home-style-1', title: 'Home Style 1' },
      { link: '/home/home-style-2', title: 'Home Style 2' },
      { link: '/home/home-style-3', title: 'Home Style 3' },
      { link: '/home/home-style-4', title: 'Home Style 4' },
      { link: '/home/home-style-5', title: 'Home Style 5' },
      { link: '/home/home-style-6', title: 'Home Style 6' },
      { link: '/home/home-style-7', title: 'Home Style 7' },
    ]
     
  },
  {
    link: '/pages/contact',
    title: 'Recetas',
  },
  
  {
    link: '/pages/contact',
    title: 'Contacto',
  },
]

export default menuData;

// mobile menus
export const mobile_menus:IMobileMenu[] = [
  {
    link: '/',
    title: 'Home',

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
    link: '/pages/contact',
    title: 'Contacto',
  },
];
