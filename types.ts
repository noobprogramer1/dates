
export type Category = 'سكري' | 'مجدول' | 'عجوة';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  weight: string;
  image: string;
  isBestSeller?: boolean;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
