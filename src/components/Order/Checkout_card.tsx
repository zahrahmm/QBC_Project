import axios from "axios";
import React, { useEffect, useState } from "react";

interface OrderItem {
  image: string;
  name: string;
  qty: number;
  price: number;
}

interface Order {
  orderItems: OrderItem[];
}

const CheckoutCard = () => {
  const [order, setOrder] = useState<Order>({ orderItems: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          "https://qbc9.liara.run/api/orders/mine"
        );
        setOrder(response.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, []);

  if (isLoading)
    return <div className="text-white">Loading order items...</div>;
  if (order.orderItems.length === 0)
    return <div className="text-white">No items in this order</div>;

  return (
    <div className="flex flex-col gap-4">
      {order.orderItems.map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          className="flex justify-between items-center w-full h-20"
        >
          <div className="flex items-center gap-4 w-[346px]">
            <div className="flex justify-center items-center w-20 h-20">
              <img
                className="w-16 h-16 object-cover bg-blue-500"
                src={item.image}
                alt={item.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "fallback-image-url";
                }}
              />
            </div>
            <p className="text-white text-base w-64 line-clamp-1">
              {item.name}
            </p>
          </div>

          <div className="flex gap-8">
            <p className="text-white text-base w-16 text-center">{item.qty}</p>
            <p className="text-white text-base w-16 text-center">
              {item.price.toLocaleString()} تومان
            </p>
            <p className="text-white text-base w-24 text-center">
              {(item.qty * item.price).toLocaleString()} تومان
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutCard;
