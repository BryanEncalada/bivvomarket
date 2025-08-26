export type ISocial = {
  link: string;
  icon: string;
  name: string;
};

const social_links: ISocial[] = [
  {
    link: 'https://www.facebook.com/profile.php?id=100086910256696&sk=about',
    icon: 'fab fa-facebook-f',
    name: 'Facebook',
  },
  // {
  //   link: "http://twitter.com",
  //   icon: "fab fa-twitter",
  //   name: "Twitter",
  // },
  {
    link: 'https://www.instagram.com/bivvomarket/',
    icon: 'fab fa-instagram',
    name: 'Instagram',
  },
];

export default social_links;
