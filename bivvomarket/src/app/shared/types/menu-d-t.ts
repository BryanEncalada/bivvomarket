export interface IMenuType {
  link:string,
  title:string,
  hasDropdown?:boolean,
  megamenu?:boolean,
  href?:boolean,
  dropdownItems?:{
    link: string
    title: string,
    categoria?: string,
    img: string,
    dropdownMenu?:{
      link: string
      title: string,
    }[]
  }[],
}


// Define the menu data type
export interface IMobileMenu{
  title: string;
  link?: string;
  dropdownMenu?: {
    link: string;
    title: string;
  }[];
}
