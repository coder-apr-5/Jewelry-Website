import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Diamond Eternity Ring',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    category: 'rings',
    description: 'Stunning diamond eternity ring featuring brilliant-cut diamonds set in 18k white gold.',
  },
  {
    id: '2',
    name: 'Pearl Pendant Necklace',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    category: 'necklaces',
    description: 'Elegant freshwater pearl pendant necklace with 14k gold chain.',
  },
  {
    id: '3',
    name: 'Sapphire Drop Earrings',
    price: 749.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    category: 'earrings',
    description: 'Beautiful sapphire drop earrings surrounded by diamonds.',
  },
];