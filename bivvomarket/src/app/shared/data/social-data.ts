export type ISocial = {
  link: string;
  icon: string;
  name: string;
  svgUrl: string;
};

const social_links: ISocial[] = [
  {
    link: 'https://www.facebook.com/profile.php?id=100086910256696&sk=about',
    icon: 'fal fa-facebook',
    name: 'Facebook',
    svgUrl: 'assets/img/svg/brand-facebook.svg',
  },
  // {
  //   link: "http://twitter.com",
  //   icon: "fab fa-twitter",
  //   name: "Twitter",
  // },
  {
    link: 'https://www.instagram.com/bivvomarket/',
    icon: 'fab fa-facebook-f',
    name: 'Instagram',
    svgUrl: 'assets/img/svg/brand-instagram.svg',
  },
];

export default social_links;
