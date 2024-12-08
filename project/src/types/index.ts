export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'necklaces' | 'rings' | 'earrings' | 'bracelets';
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}