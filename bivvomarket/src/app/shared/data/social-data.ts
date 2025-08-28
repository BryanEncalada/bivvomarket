export type ISocial = {
  link: string;
  icon: string;
  name: string;
  svgUrl: string;
};

const social_links: ISocial[] = [
  {
    link: 'https://www.facebook.com/profile.php?id=100086910256696&sk=about',
    icon: 'fa fa-facebook',
    name: 'Facebook',
    svgUrl: 'assets/img/svg/icons8-facebook-48.svg',
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
    svgUrl: 'assets/img/svg/icons8-instagram-48.svg',
  },
];

export default social_links;
