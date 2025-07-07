import { IProduct } from "../types/IProduct";

const product_data:IProduct[] = [
  {
    id: 1,
    img: 'assets/img/shop/product/Bivvo10.JPG',
    trending:true,
    banner:true,
    related_images: [
      'assets/img/shop/product/product_1.png',
      'assets/img/shop/product/product_2.png',
      'assets/img/shop/product/product_3.png'
    ],
    thumb_img: 'assets/img/shop/product/product_3.png',
    banner_img:'assets/img/shop/banner/banner-big-1.jpg',
    parentCategory:'Decoration & Accessories',
    category: 'Accessories',
    brand: 'Sony',
    title: 'Cacao Pop de Quinoa',
    price: 96,
    old_price: 120,
    rating: 3,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XL', 'XXL'],
    colors: ['Yellow', 'Blue', 'White','Ocean Blue'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 2,
    img:'assets/img/shop/product/product_2.png',
    trending:true,
    related_images: [
      'assets/img/shop/product/product_2.png',
      'assets/img/shop/product/product_3.png',
      'assets/img/shop/product/product_4.png'
    ],
    thumb_img: 'assets/img/shop/product/product_5.png',
    parentCategory:'Lighting & Chair',
    category: 'Chair',
    brand: 'Sony',
    title: 'Miel Pop de Quinoa',
    price: 90,
    old_price: 110,
    rating: 4,
    quantity:5,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XL', 'L'],
    colors: ['White','Ocean Blue'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      }
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 3,
    img: 'assets/img/shop/product/product_3.png',
    trending:true,
    banner:true,
    related_images: [
      'assets/img/shop/product/product_3.png',
      'assets/img/shop/product/product_4.png',
      'assets/img/shop/product/product_5.png'
    ],
    thumb_img: 'assets/img/shop/product/product_1.png',
    banner_img:'assets/img/shop/banner/banner-big-2.jpg',
    parentCategory:'Clothing & Oil',
    category: 'Clothing',
    brand: 'Panasonic',
    title: 'Paletas Originales De Quinua',
    price: 230,
    old_price: 250,
    rating: 5,
    quantity:7,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Orange','Green'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 4,
    img: 'assets/img/shop/product/product_4.png',
    trending:true,
    discount:8,
    new:true,
    related_images: [
      'assets/img/shop/product/product_4.png',
      'assets/img/shop/product/product_5.png',
      'assets/img/shop/product/product_6.png'
    ],
    thumb_img: 'assets/img/shop/product/product_2.png',
    parentCategory:'Lighting & Chair',
    category: 'Lighting',
    brand: 'Panasonic',
    title: 'Bundle pack (all 3 products)',
    price: 67,
    old_price: 80,
    rating: 4,
    quantity:8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'M'],
    colors: ['Black','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 5,
    img: 'assets/img/shop/product/product_5.png',
    trending:true,
    related_images: [
      'assets/img/shop/product/product_5.png',
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png'
    ],
    thumb_img: 'assets/img/shop/product/product_8.png',
    parentCategory:'Decoration & Accessories',
    category: 'Decoration',
    brand: 'Apple',
    title: 'Paletas De Cacao Y Quinoa',
    price: 180,
    old_price: 200,
    rating: 3.5,
    quantity:10,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 6,
    img: 'assets/img/shop/product/product_6.png',
    trending:true,
    related_images: [
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png',
      'assets/img/shop/product/product_8.png'
    ],
    thumb_img: 'assets/img/shop/product/product_1.png',
    parentCategory:'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: '3-Pack Honey Flavor',
    price: 270,
    old_price: 290,
    rating: 3,
    quantity:11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red','White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details:{
      details_text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list:[
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
       ],
       details_text_2:'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  
]

export default product_data;
