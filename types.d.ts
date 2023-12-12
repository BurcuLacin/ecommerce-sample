export interface productType {
  name: string;
  description: string;
  type: string;
  price: number;
  price_range: string;
  id: number;
  image: string;
  url: string;
  free_shipping: string;
  popularity: number;
  categoryId: number;
  rating: number;
  brandId: number;
}

export interface categoriesType {
  id: number;
  name: string;
  description: string;
}
