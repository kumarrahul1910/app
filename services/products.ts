export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Gray-Nicolls Powerbow Cricket Bat',
    price: 299.99,
    description: 'Professional grade English willow cricket bat with perfect weight distribution and sweet spot.',
    category: 'Bats',
    image: 'https://i.imgur.com/JR6kFQw.jpg',
    rating: {
      rate: 4.8,
      count: 120
    }
  },
  {
    id: 2,
    title: 'Kookaburra Red Cricket Ball',
    price: 24.99,
    description: 'Premium quality red leather cricket ball, perfect for matches and practice sessions.',
    category: 'Balls',
    image: 'https://i.imgur.com/8tMUxP6.jpg',
    rating: {
      rate: 4.5,
      count: 85
    }
  },
  {
    id: 3,
    title: 'Masuri Vision Series Cricket Helmet',
    price: 89.99,
    description: 'Advanced cricket helmet with titanium grille and adjustable padding for maximum protection.',
    category: 'Protection',
    image: 'https://i.imgur.com/8tMUxP6.jpg',
    rating: {
      rate: 4.7,
      count: 95
    }
  },
  {
    id: 4,
    title: 'Gray-Nicolls Cricket Pads',
    price: 79.99,
    description: 'Professional cricket leg pads with extra protection and comfortable fit.',
    category: 'Protection',
    image: 'https://i.imgur.com/JR6kFQw.jpg',
    rating: {
      rate: 4.6,
      count: 75
    }
  },
  {
    id: 5,
    title: 'Kookaburra Cricket Gloves',
    price: 49.99,
    description: 'Premium batting gloves with enhanced grip and superior protection.',
    category: 'Protection',
    image: 'https://i.imgur.com/8tMUxP6.jpg',
    rating: {
      rate: 4.4,
      count: 60
    }
  },
  {
    id: 6,
    title: 'Gray-Nicolls Cricket Kit Bag',
    price: 129.99,
    description: 'Large cricket kit bag with multiple compartments and durable construction.',
    category: 'Accessories',
    image: 'https://i.imgur.com/JR6kFQw.jpg',
    rating: {
      rate: 4.3,
      count: 45
    }
  },
  {
    id: 7,
    title: 'Kookaburra Cricket Batting Pads',
    price: 69.99,
    description: 'Lightweight batting pads with maximum protection and comfort.',
    category: 'Protection',
    image: 'https://i.imgur.com/8tMUxP6.jpg',
    rating: {
      rate: 4.5,
      count: 55
    }
  },
  {
    id: 8,
    title: 'Gray-Nicolls Cricket Batting Gloves',
    price: 54.99,
    description: 'Professional batting gloves with enhanced grip and protection.',
    category: 'Protection',
    image: 'https://i.imgur.com/JR6kFQw.jpg',
    rating: {
      rate: 4.6,
      count: 65
    }
  },
  {
    id: 9,
    title: 'Kookaburra Cricket Batting Pads',
    price: 74.99,
    description: 'Premium batting pads with extra protection and comfortable fit.',
    category: 'Protection',
    image: 'https://i.imgur.com/8tMUxP6.jpg',
    rating: {
      rate: 4.4,
      count: 50
    }
  },
  {
    id: 10,
    title: 'Gray-Nicolls Cricket Kit Bag',
    price: 119.99,
    description: 'Large cricket kit bag with multiple compartments and durable construction.',
    category: 'Accessories',
    image: 'https://i.imgur.com/JR6kFQw.jpg',
    rating: {
      rate: 4.3,
      count: 40
    }
  }
]; 