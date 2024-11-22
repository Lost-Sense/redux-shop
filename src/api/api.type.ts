export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: IRate;
  local?: boolean;
}

interface IRate {
  rate: number;
  count: number;
}

export interface ProductsState {
  products: ProductsInner;
}

export interface ProductsInner {
  products: Product[];
  isLoading: boolean;
}
