// lib/mock-data.ts
export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    description: string;
    image: string;
    category: string;
    stock: number;
  }
  
  export const MOCK_PRODUCTS: Product[] = [
    {
      id: '1',
      name: 'Premium Leather Chelsea Boots',
      slug: 'leather-chelsea-boots',
      price: 125.00,
      description: 'Classic British style meets modern comfort. Handcrafted in artisan workshops.',
      image: '/images/boots.jpg',
      category: 'Footwear',
      stock: 10
    },
    {
      id: '2',
      name: 'Merino Wool Overcoat',
      slug: 'merino-wool-overcoat',
      price: 249.99,
      description: 'Tailored fit overcoat made from 100% sustainably sourced Merino wool.',
      image: '/images/overcoat.jpg',
      category: 'Outerwear',
      stock: 5
    },
    {
      id: '3',
      name: 'Italian Cotton Oxford Shirt',
      slug: 'italian-cotton-oxford-shirt',
      price: 89.00,
      description: 'Breathable, smooth-touch cotton shirt cut for a polished everyday silhouette.',
      image: '/images/shirt.jpg',
      category: 'Shirting',
      stock: 14
    },
    {
      id: '4',
      name: 'Tailored Pleated Trousers',
      slug: 'tailored-pleated-trousers',
      price: 110.00,
      description: 'Precision pleating and premium drape for elevated smart-casual styling.',
      image: '/images/trousers.jpg',
      category: 'Trousers',
      stock: 18
    },
    {
      id: '5',
      name: 'Cashmere Blend Scarf',
      slug: 'cashmere-blend-scarf',
      price: 72.00,
      description: 'Ultra-soft brushed weave with warmth retention for cooler city evenings.',
      image: '/images/scarf.jpg',
      category: 'Accessories',
      stock: 22
    },
    {
      id: '6',
      name: 'Minimal Leather Weekender',
      slug: 'minimal-leather-weekender',
      price: 320.00,
      description: 'Structured full-grain weekender bag crafted for travel and daily refinement.',
      image: '/images/weekender.jpg',
      category: 'Bags',
      stock: 7
    }
  ];