export interface Imagen {
  id: number;
  producto_id: string;
  imagen: string;
}

export interface Talla {
  id: number;
  producto_id: string;
  talla: string;
}

export interface DetalleLista {
  id: number;
  producto_id: string;
  detalle: string;
}

export interface IProduct {
  _id: string;
  img: string;
  new: boolean;
  price: number;
  old_price: number;
  discount: number;
  status: string;
  quantity: number;
  order_quantity: number;
  weight: number;
  thumb_img: string;
  sm_desc: string;
  parent_category: string;
  category: string;
  brand: string;
  title: string;
  details_text: string;
  details_text_2: string;
  imagenes: Imagen[];
  tallas: Talla[];
  detallesLista: DetalleLista[];
}
