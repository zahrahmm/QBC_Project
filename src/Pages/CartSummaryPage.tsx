import { useCart } from "../context/CartContext";
import Stepper from "../components/Cart/Stepper";
import axios from "axios";
import { useState } from "react";

const CartSummaryPage = () => {
  const { items, address, paymentMethod } = useCart();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = Math.round(subtotal * 0.01);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  const handleSubmit = async () => {
    if (items.length === 0) {
      alert("سبد خرید شما خالی است!");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // waiting for the real API !!
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        items,
        address,
        paymentMethod,
        total,
      });

      setSuccess(true);
    } catch (err) {
      setError("ثبت سفارش با خطا مواجه شد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-[#181818] min-h-screen flex flex-col items-center py-8 px-4 text-right"
      dir="rtl"
    >
      <div className="w-full flex justify-center">
        <Stepper activeStep={2} />
      </div>

      <div className="w-full max-w-6xl mx-auto bg-transparent mt-8 overflow-x-auto">
        <table
          className="w-full text-right border-separate"
          style={{ borderSpacing: "0 6px" }}
        >
          <thead>
            <tr className="text-white text-base">
              <th className="font-bold pb-2 pr-2">عکس</th>
              <th className="font-bold pb-2 pr-2">نام محصول</th>
              <th className="font-bold pb-2 pr-2">تعداد</th>
              <th className="font-bold pb-2 pr-2">قیمت</th>
              <th className="font-bold pb-2 pr-2">قیمت نهایی</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="text-white bg-transparent">
                <td className="align-middle pr-2 py-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover mx-auto"
                    onError={(e) =>
                      (e.currentTarget.src = "https://placehold.co/64")
                    }
                  />
                </td>
                <td className="align-middle pr-2 py-2">{item.name}</td>
                <td className="align-middle pr-2 py-2">{item.quantity}</td>
                <td className="align-middle pr-2 py-2">
                  {item.price.toLocaleString()} تومان
                </td>
                <td className="align-middle pr-2 py-2">
                  {(item.price * item.quantity).toLocaleString()} تومان
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-6">
        <h3 className="font-bold text-lg text-white mb-2 text-right">
          خلاصه خرید
        </h3>
        <div className="bg-[#1f1f1f] rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 shadow-md">
          <div className="flex-1 text-right min-w-[160px]">
            <div className="font-bold text-white mb-1">روش پرداخت</div>
            <div className="text-gray-300">
              روش :{" "}
              {paymentMethod === "pasargad"
                ? "درگاه پرداخت پاسارگاد"
                : "درگاه پرداخت زرین پال"}
            </div>
          </div>
          <div className="flex-1 text-right min-w-[200px]">
            <div className="font-bold text-white mb-1">آدرس دریافت</div>
            <div className="text-gray-300">
              آدرس : {address.country}،{address.city}، {address.address}
            </div>
            <p className="text-gray-300">کدپستی: {address.postal}</p>
          </div>
          <div className="flex-1 text-right min-w-[180px] flex flex-col gap-1">
            <div>
              قیمت محصولات :{" "}
              <span className="font-bold text-white">
                {subtotal.toLocaleString()} تومان
              </span>
            </div>
            <div>
              هزینه ارسال :{" "}
              <span className="font-bold text-white">
                {shipping.toLocaleString()} تومان
              </span>
            </div>
            <div>
              مالیات :{" "}
              <span className="font-bold text-white">
                {tax.toLocaleString()} تومان
              </span>
            </div>
            <div>
              مبلغ نهایی :{" "}
              <span className="font-bold text-white">
                {total.toLocaleString()} تومان
              </span>
            </div>
          </div>
        </div>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && (
        <p className="text-green-500 mt-4">سفارش با موفقیت ثبت شد🥳</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="btn bg-[#db2777] text-[#ffffff] w-full max-w-6xl mt-6 rounded-full text-md"
      >
        {loading ? "در حال ارسال..." : "ثبت سفارش"}
      </button>
    </div>
  );
};

export default CartSummaryPage;
