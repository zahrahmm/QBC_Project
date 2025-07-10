import { useParams } from "react-router-dom";
import { useCheckout } from "../../utils/useCheckOut";
import {
  persianDateFormatter,
  persianCurrencyFormatter,
} from "../../models/PersianLocale";
import CheckoutCard from "./Checkout_card";

const OrderDetail = () => {
  const { id } = useParams();
  const { data: order, isLoading, error } = useCheckout(id || "");

  if (isLoading)
    return <div className="text-center p-8">درحال بارگذاری...</div>;
  if (error)
    return (
      <div className="text-center p-8 text-error">
        خطا در دریافت اطلاعات سفارش
      </div>
    );
  if (!order) return <div className="text-center p-8">سفارشی یافت نشد</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">جزئیات سفارش #{order._id}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-base-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">محصولات سفارش</h2>
          <CheckoutCard />
        </div>

        <div className="bg-base-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">خلاصه سفارش</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>وضعیت پرداخت:</span>
              <span className={order.isPaid ? "text-success" : "text-error"}>
                {order.isPaid ? "پرداخت شده" : "پرداخت نشده"}
              </span>
            </div>

            <div className="flex justify-between">
              <span>وضعیت ارسال:</span>
              <span
                className={order.isDelivered ? "text-success" : "text-error"}
              >
                {order.isDelivered ? "ارسال شده" : "ارسال نشده"}
              </span>
            </div>

            <div className="divider"></div>

            <div className="flex justify-between">
              <span>قیمت محصولات:</span>
              <span>{persianCurrencyFormatter.format(order.itemsPrice)}</span>
            </div>

            <div className="flex justify-between">
              <span>هزینه ارسال:</span>
              <span>
                {persianCurrencyFormatter.format(order.shippingPrice)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>مالیات:</span>
              <span>{persianCurrencyFormatter.format(order.taxPrice)}</span>
            </div>

            <div className="divider"></div>

            <div className="flex justify-between font-bold text-lg">
              <span>مبلغ کل:</span>
              <span>{persianCurrencyFormatter.format(order.totalPrice)}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-base-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">اطلاعات ارسال</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">آدرس:</h3>
              <p>{order.shippingAddress.address}</p>
              <p>
                {order.shippingAddress.city} -{" "}
                {order.shippingAddress.postalCode}
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">روش پرداخت:</h3>
              <p>{order.paymentMethod}</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">تاریخ سفارش:</h3>
              <p>{persianDateFormatter.format(new Date(order.createdAt))}</p>
            </div>
            {order.paidAt && (
              <div>
                <h3 className="font-medium mb-2">تاریخ پرداخت:</h3>
                <p>{persianDateFormatter.format(new Date(order.paidAt))}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
