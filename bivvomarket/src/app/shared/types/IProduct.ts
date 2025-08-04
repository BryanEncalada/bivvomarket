export interface IProduct {
  _id: string;
  img: string;
  new?: boolean;
  price: number;
  old_price?: number;
  discount?: number;
  status?: string;
  quantity: number;
  related_images: string[];
  orderQuantity?: number;
  sizes: string[];
  weight?: number;
  thumb_img: string;
  sm_desc: string;
  parentCategory: string;
  category: string;
  brand: string;
  title: string;
  details: {
    details_text: string;
    details_list: string[];
    details_text_2: string;
  };
}
