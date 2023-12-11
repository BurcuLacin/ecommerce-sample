export interface productType {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  image: string;
  images: string[];
}

export interface categoriesType {
  id: number;
  name: string;
  description: string;
}