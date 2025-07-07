export interface Review {
  _id: string;
  name: string;
  comment: string;
  rating: number;
  createdAt: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  quantity: number;
  countInStock: number;
  category:
    | {
        _id: string;
        name: string;
      }
    | undefined;
  reviews: Review[];
  updatedAt: string;
}
