import React, { useEffect, useState } from "react";
import axios from "axios";
import CheckoutCard from "../components/Order/Checkout_card";
import type { UserResponse as user } from "../types/user";
import type { orderModel as orders } from "../types/orderModel";

const Checkout = () => {
  const [user, setUser] = useState<user | null>(null);
  const [orders, setOrders] = useState<orders | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersResponse, userResponse] = await Promise.all([
          axios.get("https://qbc9.liara.run/api/orders/mine"),
          axios.get("https://qbc9.liara.run/api/users/profile"),
        ]);
        setOrders(ordersResponse.data);
        setUser(userResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (!orders || !user)
    return <div className="text-white">No data available</div>;

  return (
    <div className="flex gap-14 h-screen mt-24 mr-52">
      {/* Order Items Section */}
      <div className="w-[909px] border border-gray-700 p-6">
        <div className="w-full flex flex-col gap-8">
          {/* Table Header */}
          <div className="flex justify-between pb-2 border-b border-gray-700">
            <div className="flex gap-4">
              <span className="text-white text-base">عکس</span>
              <span className="text-white text-base w-[250px]">نام محصول</span>
            </div>
            <span className="text-white text-base">تعداد</span>
            <span className="text-white text-base">قیمت</span>
            <span className="text-white text-base">قیمت نهایی</span>
          </div>

          {/* Order Items */}
          <div className="flex flex-col">
            <CheckoutCard />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-[549px]">
        <div className="flex flex-col gap-6">
          <h3 className="text-white text-xl font-medium">آدرس دریافت</h3>
          <div className="flex flex-col gap-6">
            <p className="text-pink-600 text-base font-bold">
              شماره سفارش:{" "}
              <span className="text-white font-normal">{orders._id}</span>
            </p>
            <p className="text-pink-600 text-base font-bold">
              نام:{" "}
              <span className="text-white font-normal">{user.username}</span>
            </p>
            <p className="text-pink-600 text-base font-bold">
              ایمیل:{" "}
              <span className="text-white font-normal">{user.email}</span>
            </p>
            <p className="text-pink-600 text-base font-bold">
              آدرس:{" "}
              <span className="text-white font-normal">
                {orders.shippingAddress?.address}
              </span>
            </p>
            <p className="text-pink-600 text-base font-bold">
              روش پرداخت:{" "}
              <span className="text-white font-normal">درگاه بانک سامان</span>
            </p>
          </div>

          <div className="border border-gray-700 rounded bg-gray-800 p-2">
            <p className="text-base">Status</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-white text-xl font-medium">خلاصه خرید</h3>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p className="text-gray-400 text-base font-bold">قیمت محصولات:</p>
              <p className="text-white text-base">{orders.itemsPrice} تومان</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400 text-base font-bold">هزینه ارسال:</p>
              <p className="text-white text-base">
                {orders.shippingPrice} تومان
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400 text-base font-bold">مالیات:</p>
              <p className="text-white text-base">{orders.taxPrice} تومان</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-400 text-base font-bold">مبلغ نهایی:</p>
              <p className="text-white text-base">{orders.totalPrice} تومان</p>
            </div>
          </div>
        </div>

        <button className="w-full h-12 bg-pink-600 rounded-full text-white text-xl font-medium">
          پرداخت
        </button>
      </div>
    </div>
  );
};

export default Checkout;
