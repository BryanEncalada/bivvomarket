import { IProduct } from '../types/IProduct';

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
      'assets/img/shop/product/Bivvo10.JPG',
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
    sm_desc:
      'Es un producto elaborado a base de granos de quinua seleccionados que, mediante un proceso de extrusión, reduce la humedad y la carga microbiana, propiciando cambios físicos y químicos, haciéndolos digeribles. Contiene miel, sin ningún preservante ni aditivo.',
    sizes: ['L', 'XL', 'XXL'],
    colors: ['Yellow', 'Blue', 'White', 'Ocean Blue'],
    weight: 0.25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
    ],
    details: {
      details_text: `Se puede consumir como snack o topping en productos como: yogurt o ensalada de frutas. Por su sabor ligero dulce se puede consumir en cualquier momento del día solo o acompañado.`,
      details_list: ['100% Extruded Organic Quinoa', 'Natural Cocoa Powder'],
      details_text_2:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
  {
    id: 2,
    img: 'assets/img/shop/product/Bivvo19.JPG',
    trending: true,
    related_images: [
      'assets/img/shop/product/Bivvo19.JPG',
      'assets/img/shop/product/Bivvo20.JPG',
      'assets/img/shop/product/Bivvo21.JPG',
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
    sm_desc:
      'Es un producto elaborado a base de granos de quinua seleccionados que, mediante un proceso de extrusión, reduce la humedad y la carga microbiana, propiciando cambios físicos y químicos, haciéndolos digeribles. Contiene miel, sin ningún preservante ni aditivo.',
    sizes: ['XL', 'L'],
    colors: ['White', 'Ocean Blue'],
    weight: 0.25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:
          'Se puede consumir como snack o topping en productos como: yogurt o ensalada de frutas. Por su sabor ligero dulce se puede consumir en cualquier momento del día solo o acompañado.',
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
    ],
    details: {
      details_text:
        'Se puede consumir como snack o topping en productos como: yogurt o ensalada de frutas. Por su sabor ligero dulce se puede consumir en cualquier momento del día solo o acompañado.',
      details_list: ['100% Extruded Organic Quinoa', 'Natural Cocoa Powder'],
      details_text_2:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
  {
    id: 3,
    img: 'assets/img/shop/product/Bivvo1.JPG',
    trending: true,
    banner: true,
    related_images: [
      'assets/img/shop/product/Bivvo1.JPG',
      'assets/img/shop/product/Bivvo2.JPG',
      'assets/img/shop/product/Bivvo12.JPG',
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
    sm_desc:
      'Es un producto elaborado a base de granos de quinua seleccionados que, mediante un proceso de extrusión, reduce la humedad y la carga microbiana, propiciando cambios físicos y químicos, haciéndolos digeribles. No contiene preservante ni aditivos.',
    sizes: ['XXL', 'M'],
    colors: ['Orange', 'Green'],
    weight: 0.25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
    ],
    details: {
      details_text:
        'Se puede consumir como snack o topping en productos como: yogurt o ensalada de frutas. Al ser su sabor neutro, como la quinua misma, se puede adaptar a cualquier preparación de alimentos.',
      details_list: ['100% Extruded Organic Quinoa', 'Natural Cocoa Powder'],
      details_text_2:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
  {
    id: 4,
    img: 'assets/img/shop/product/Bivvo41-3.png',
    trending: true,
    discount: 0,
    new: false,
    related_images: [
      'assets/img/shop/product/product_4.png',
      'assets/img/shop/product/product_5.png',
      'assets/img/shop/product/product_6.png',
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
    sm_desc:
      'Es un producto elaborado a base de granos de quinua seleccionados que, mediante un proceso de extrusión, reduce la humedad y la carga microbiana, propiciando cambios físicos y químicos, haciéndolos digeribles. No contiene preservante ni aditivos.',
    sizes: ['L', 'M'],
    colors: ['Black', 'White'],
    weight: 0.25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
    ],
    details: {
      details_text:
        'Se puede consumir como snack o topping en productos como: yogurt o ensalada de frutas. Por su sabor ligero dulce se puede consumir en cualquier momento del día solo o acompañado.',
      details_list: ['100% Extruded Organic Quinoa', 'Natural Cocoa Powder'],
      details_text_2:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
  {
    id: 5,
    img: 'assets/img/shop/product/Bivvo10_1.JPG',
    trending: true,
    related_images: [
      'assets/img/shop/product/product_5.png',
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png',
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
    sm_desc:
      'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: 0.25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
    ],
    details: {
      details_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
      ],
      details_text_2:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
  {
    id: 6,
    img: 'assets/img/shop/product/Bivvo61.png',
    trending: true,
    related_images: [
      'assets/img/shop/product/product_6.png',
      'assets/img/shop/product/product_7.png',
      'assets/img/shop/product/product_8.png',
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
    sm_desc:
      'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: 0.25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
    ],
    details: {
      details_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
      ],
      details_text_2:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
  {
    id: 7,
    img: 'assets/img/shop/product/Sypup01.png',
    trending: true,
    related_images: [
      'assets/img/shop/product/Sypup01.png',
      'assets/img/shop/product/Sypup01.png',
      'assets/img/shop/product/Sypup01.png',
    ],
    thumb_img: 'assets/img/shop/product/Sypup01.png',
    parentCategory: 'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Syrup',
    title: 'Jarabe Frutado de Mango 1KG',
    price: 8,
    old_price: 0,
    rating: 3,
    quantity: 11,
    sm_desc:
      'Disfruta del auténtico sabor tropical con nuestro jarabe frutado de mango. Elaborado con fruta natural y sin ingredientes artificiales, este producto es ideal para cocteles, repostería, bebidas refrescantes o toppings. Presentado en una botella de 1KG, es práctico y versátil para uso doméstico o profesional.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: 0.25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
    ],
    details: {
      details_text:
        'Nuestro f.syrup Mango es la explosión dulce y natural que tus recetas estaban esperando. Perfecto para smoothies, postres o cócteles, este jarabe frutado combina el intenso sabor del mango con una textura irresistible. ¡Deleita a tus sentidos y llévalo a tu cocina!',
      details_list: [
        'Producto elaborado con ingredientes seleccionados que garantizan calidad y sabor inigualable.',

        'Ideal para quienes buscan una opción natural y deliciosa en cada preparación.',

        'Desarrollado para ofrecer una experiencia de sabor única y auténtica.',

        'Nuestra fórmula combina tradición y frescura en cada gota.',

        'Perfecto para complementar bebidas, postres y recetas creativas.',
      ],
      details_text_2:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
  {
    id: 8,
    img: 'assets/img/shop/product/Sypup02.png',
    trending: true,
    related_images: [
      'assets/img/shop/product/Sypup02.png',
      'assets/img/shop/product/Sypup02.png',
      'assets/img/shop/product/Sypup02.png',
    ],
    thumb_img: 'assets/img/shop/product/Sypup02.png',
    parentCategory: 'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Syrup',
    title: 'Jarabe Frutado de Fresa 1KG',
    price: 8,
    old_price: 0,
    rating: 3,
    quantity: 11,
    sm_desc:
      'Disfruta del auténtico sabor tropical con nuestro jarabe frutado de fresa. Elaborado con fruta natural y sin ingredientes artificiales, este producto es ideal para cocteles, repostería, bebidas refrescantes o toppings. Presentado en una botella de 1KG, es práctico y versátil para uso doméstico o profesional.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: 0.25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
    ],
    details: {
      details_text:
        'Nuestro f.syrup Mango es la explosión dulce y natural que tus recetas estaban esperando. Perfecto para smoothies, postres o cócteles, este jarabe frutado combina el intenso sabor del mango con una textura irresistible. ¡Deleita a tus sentidos y llévalo a tu cocina!',
      details_list: [
        'Producto elaborado con ingredientes seleccionados que garantizan calidad y sabor inigualable.',

        'Ideal para quienes buscan una opción natural y deliciosa en cada preparación.',

        'Desarrollado para ofrecer una experiencia de sabor única y auténtica.',

        'Nuestra fórmula combina tradición y frescura en cada gota.',

        'Perfecto para complementar bebidas, postres y recetas creativas.',
      ],
      details_text_2:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
  {
    id: 9,
    img: 'assets/img/shop/product/Sypup03.png',
    trending: true,
    related_images: [
      'assets/img/shop/product/Sypup03.png',
      'assets/img/shop/product/Sypup03.png',
      'assets/img/shop/product/Sypup03.png',
    ],
    thumb_img: 'assets/img/shop/product/Sypup03.png',
    parentCategory: 'FASHION FOR MEN’S',
    category: 'Shirt',
    brand: 'Syrup',
    title: 'Jarabe Frutado de Maracuyá 1KG',
    price: 8,
    old_price: 0,
    rating: 3,
    quantity: 11,
    sm_desc:
      'Disfruta del auténtico sabor tropical con nuestro jarabe frutado de fresa. Elaborado con fruta natural y sin ingredientes artificiales, este producto es ideal para cocteles, repostería, bebidas refrescantes o toppings. Presentado en una botella de 1KG, es práctico y versátil para uso doméstico o profesional.',
    sizes: ['L', 'XXL'],
    colors: ['Red', 'White'],
    weight: 0.25,
    dimension: '62 × 56 × 12',
    reviews: [
      {
        img: 'assets/img/blog/comments/avater-1.png',
        name: 'Siarhei Dzenisenka',
        time: '3 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-2.png',
        name: 'Julias Roy',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
      {
        img: 'assets/img/blog/comments/avater-3.png',
        name: 'Arista Williamson',
        time: '6 Months Ago',
        rating: 4,
        review_desc:
          'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
      },
    ],
    details: {
      details_text:
        'Nuestro f.syrup Mango es la explosión dulce y natural que tus recetas estaban esperando. Perfecto para smoothies, postres o cócteles, este jarabe frutado combina el intenso sabor del mango con una textura irresistible. ¡Deleita a tus sentidos y llévalo a tu cocina!',
      details_list: [
        'Producto elaborado con ingredientes seleccionados que garantizan calidad y sabor inigualable.',

        'Ideal para quienes buscan una opción natural y deliciosa en cada preparación.',

        'Desarrollado para ofrecer una experiencia de sabor única y auténtica.',

        'Nuestra fórmula combina tradición y frescura en cada gota.',

        'Perfecto para complementar bebidas, postres y recetas creativas.',
      ],
      details_text_2:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
];

export default product_data;
