import { IProduct } from "../types/IProduct";

const product_data: IProduct[] = [
  {
    id: 1,
    img: 'assets/img/shop/product/Bivvo11.JPG',
    trending: true,
    banner: true,
    discount: 10,
    new: true,
    related_images: [
      'assets/img/shop/product/Bivvo11.JPG',
      'assets/img/shop/product/Bivvo12.JPG',
      'assets/img/shop/product/Bivvo10.JPG'
    ],
    thumb_img: 'assets/img/shop/product/Bivvo10.JPG',
    banner_img: 'assets/img/shop/banner/banner-big-1.jpg',
    parentCategory: 'Decoration & Accessories',
    category: 'Snack',
    brand: 'Sony',
    title: 'Cacao Pop de Quinoa',
    price: 6.64,
    old_price: 0,
    rating: 3,
    quantity: 8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XL', 'XXL'],
    colors: ['Yellow', 'Blue', 'White', 'Ocean Blue'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details: {
      details_text: `Bivvo Market provides high-quality and healthy products to those who care about their health. With sustainable organic farming traditions, Bivvo goes to great lengths in the process of providing you with the best quality of organic products to meet all your needs!  <br><br>
Way back in ancient times, before modern commercialization, people lived in harmony with nature. Our ancestors thrived off the land and ate what it provided them.<br><br>
These Cacao Quinoa Pops are 100% Peruvian Inca superfoods obtained exclusively through small associated farmers harvesting under organic production systems, which were used 7000 years ago by their ancient forefathers in Peru!<br><br>
Quinoa is a staple in the diet of many healthy cultures and one of a kind superfood that has been shown to have numerous health benefits. With its rich protein content combined with our formula of natural cocoa powder for taste and performance enhancement, this cacao quinoa pop will keep you coming back for more!`,
      details_list: [
        '100% Extruded Organic Quinoa',
        'Natural Cocoa Powder',
        'Panela',
        'Anti-Inflammatory Agents',
        'Copper',
        'Essential Amino Acids',
        'Fibre',
        'Folate',
        'Healthy Carbs',
        'Iron',
        'Magnesium',
        'Manganese',
        'Minerals',
        'Nutrients',
        'Phosphorous',
        'Antioxidants',
        'Proteins',
        'Riboflavin',
        'Thiamin',
        'Vitamin B6',
        'Zinc'],
      details_text_2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 2,
    img: 'assets/img/shop/product/Bivvo19.JPG',
    trending: true,
    related_images: [
      'assets/img/shop/product/product_2.png',
      'assets/img/shop/product/product_3.png',
      'assets/img/shop/product/product_4.png'
    ],
    thumb_img: 'assets/img/shop/product/Bivvo20.JPG',
    parentCategory: 'Lighting & Chair',
    category: 'Snack',
    brand: 'Sony',
    title: 'Miel Pop de Quinoa',
    price: 6.64,
    old_price: 0,
    rating: 4,
    quantity: 5,
    sm_desc: 'Bivvo Market ofrece productos saludables y de alta calidad a quienes se preocupan por su salud. ¡Con tradiciones de agricultura orgánica sostenible, Bivvo hace todo lo posible en el proceso de brindarle productos orgánicos de la mejor calidad para satisfacer todas sus necesidades!',
    sizes: ['XL', 'L'],
    colors: ['White', 'Ocean Blue'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      }
    ],
    details: {
      details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [

      ],
      details_text_2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 3,
    img: 'assets/img/shop/product/Bivvo1.JPG',
    trending: true,
    banner: true,
    related_images: [
      'assets/img/shop/product/product_3.png',
      'assets/img/shop/product/product_4.png',
      'assets/img/shop/product/product_5.png'
    ],
    thumb_img: 'assets/img/shop/product/Bivvo2.JPG',
    banner_img: 'assets/img/shop/banner/banner-big-2.jpg',
    parentCategory: 'Clothing & Oil',
    category: 'Snack',
    brand: 'Panasonic',
    title: 'Paletas Originales De Quinua',
    price: 6.64,
    old_price: 0,
    rating: 5,
    quantity: 7,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['XXL', 'M'],
    colors: ['Orange', 'Green'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details: {
      details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
      ],
      details_text_2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 4,
    img: 'assets/img/shop/product/centered_Bivvo41.png',
    trending: true,
    discount: 0,
    new: false,
    related_images: [
      'assets/img/shop/product/product_4.png',
      'assets/img/shop/product/product_5.png',
      'assets/img/shop/product/product_6.png'
    ],
    thumb_img: 'assets/img/shop/product/centered_Bivvo41.png',
    parentCategory: 'Lighting & Chair',
    category: 'Lighting',
    brand: 'Panasonic',
    title: 'Bundle pack (all 3 products)',
    price: 18.42,
    old_price: 19.92,
    rating: 4,
    quantity: 8,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'M'],
    colors: ['Black', 'White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details: {
      details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
      ],
      details_text_2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 5,
    img: 'assets/img/shop/product/Bivvo10_1.JPG',
    trending: true,
    related_images: [
      'assets/img/shop/product/product_5.png',
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png'
    ],
    thumb_img: 'assets/img/shop/product/Bivvo10_1.JPG',
    parentCategory: 'Decoration & Accessories',
    category: 'Decoration',
    brand: 'Apple',
    title: 'Paletas De Cacao Y Quinoa',
    price: 0,
    old_price: 0,
    rating: 3.5,
    quantity: 10,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details: {
      details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
      ],
      details_text_2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 6,
    img: 'assets/img/shop/product/Bivvo61.png',
    trending: true,
    related_images: [
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png',
      'assets/img/shop/product/product_8.png'
    ],
    thumb_img: 'assets/img/shop/product/Bivvo61.png',
    parentCategory: 'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: '3-Pack Honey Flavor',
    price: 18.42,
    old_price: 19.92,
    rating: 3,
    quantity: 11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details: {
      details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
      ],
      details_text_2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 7,
    img: 'assets/img/shop/product/centered_SYRUP_FRUTOSROJOS.jpg',
    trending: true,
    related_images: [
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png',
      'assets/img/shop/product/product_8.png'
    ],
    thumb_img: 'assets/img/shop/product/centered_SYRUP_FRUTOSROJOS.jpg',
    parentCategory: 'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Syrup',
    title: 'Syrup Frutos Rojos',
    price: 8,
    old_price: 0,
    rating: 3,
    quantity: 11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details: {
      details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
      ],
      details_text_2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 8,
    img: 'assets/img/shop/product/centered_SYRUP_HIEBRALUISA.jpg',
    trending: true,
    related_images: [
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png',
      'assets/img/shop/product/product_8.png'
    ],
    thumb_img: 'assets/img/shop/product/centered_SYRUP_HIEBRALUISA.jpg',
    parentCategory: 'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: 'Syrup Hierba Luisa',
    price: 8,
    old_price: 0,
    rating: 3,
    quantity: 11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details: {
      details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
      ],
      details_text_2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 9,
    img: 'assets/img/shop/product/centered_SYRUP_MARACUYAHL.jpg',
    trending: true,
    related_images: [
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png',
      'assets/img/shop/product/product_8.png'
    ],
    thumb_img: 'assets/img/shop/product/centered_SYRUP_MARACUYAHL.jpg',
    parentCategory: 'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: 'Syrup Maracuya - Hierba Luisa',
    price: 8,
    old_price: 0,
    rating: 3,
    quantity: 11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details: {
      details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
      ],
      details_text_2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  },
  {
    id: 10,
    img: 'assets/img/shop/product/centered_SYRUP_TODOS.jpg',
    trending: true,
    related_images: [
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png',
      'assets/img/shop/product/product_8.png'
    ],
    thumb_img: 'assets/img/shop/product/centered_SYRUP_TODOS.jpg',
    parentCategory: 'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Apple',
    title: '3 Pack SYRUP',
    price: 20.0,
    old_price: 24,
    rating: 3,
    quantity: 11,
    sm_desc: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: .25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
      },
    ],
    details: {
      details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.'
      ],
      details_text_2: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.'
    }
  }

]

export default product_data;
