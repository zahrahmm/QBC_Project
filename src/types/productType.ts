export type productType = {
  _id: string;
  name: string;
  image: string;
  quantity: number;
  category: category;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
  //__v: number
};

export type category = {
  _id: string;
  name: string;
};

export interface Review {
  _id: string;
  name: string;
  comment: string;
  rating: number;
  createdAt: string;
}
