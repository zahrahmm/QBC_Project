export type orderModel = {
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
  };
  paymentResult: {
    update_time: string;
  };
  _id: string;
  user: {
    _id: string;
    username: string;
  };
  orderItems: [
    {
      name: string;
      qty: number;
      price: number;
      image: string;
      product: string;
      _id: string;
    }
  ];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  deliveredAt: Date;
  paidAt: Date;
};
