import Stepper from "../components/Cart/Stepper";
import { useCartStore } from "../stores/cartStore";
import server from "../utils/axios";
import { useState } from "react";

const CartSummaryPage = () => {
  const { items, address, paymentMethod } = useCartStore();

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
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await server.post("/orders", {
        orderItems: items.map((item) => ({
          productId: item.id,
          name: item.name,
          qty: item.quantity,
          image: item.image,
          price: item.price,
        })),
        shippingAddress: {
          address: address.address,
          city: address.city,
          country: address.country,
          postalCode: address.postal,
        },
        paymentMethod: paymentMethod,
        totalPrice: total,
      });

      console.log("✅ سفارش  شما ثبت شد:", response.data);
      setSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`❌ خطا رخ داده است 🤷‍♂️`);
      } else {
        setError(`❌ خطا رخ داده است 🤷‍♂️`);
      }
    }
  };
  return (
    <div
      className="min-h-screen flex flex-col items-center py-8 px-4 text-right"
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
            <tr className="text-base">
              <th className="font-bold pb-2 pr-2">عکس</th>
              <th className="font-bold pb-2 pr-2">نام محصول</th>
              <th className="font-bold pb-2 pr-2">تعداد</th>
              <th className="font-bold pb-2 pr-2">قیمت</th>
              <th className="font-bold pb-2 pr-2">قیمت نهایی</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="bg-transparent">
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
        <h3 className="font-bold text-lg mb-2 text-right">خلاصه خرید</h3>
        <div className="rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 shadow-md">
          <div className="flex-1 text-right min-w-[160px]">
            <div className="font-bold mb-1">روش پرداخت</div>
            <div className="">
              روش :{" "}
              {paymentMethod === "pasargad"
                ? "درگاه پرداخت پاسارگاد"
                : "درگاه پرداخت زرین پال"}
            </div>
          </div>
          <div className="flex-1 text-right min-w-[200px]">
            <div className="font-bold mb-1">آدرس دریافت</div>
            <div className="">
              آدرس : {address.country}،{address.city}، {address.address}
            </div>
            <p className="">کدپستی: {address.postal}</p>
          </div>
          <div className="flex-1 text-right min-w-[180px] flex flex-col gap-1">
            <div>
              قیمت محصولات :{" "}
              <span className="font-bold">
                {subtotal.toLocaleString()} تومان
              </span>
            </div>
            <div>
              هزینه ارسال :{" "}
              <span className="font-bold">
                {shipping.toLocaleString()} تومان
              </span>
            </div>
            <div>
              مالیات :{" "}
              <span className="font-bold">{tax.toLocaleString()} تومان</span>
            </div>
            <div>
              مبلغ نهایی :{" "}
              <span className="font-bold">{total.toLocaleString()} تومان</span>
            </div>
          </div>
        </div>
      </div>

      {error && <p className="text-error mt-4">{error}</p>}
      {success && <p className="text-success mt-4">سفارش با موفقیت ثبت شد🥳</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="btn btn-secondary w-full max-w-6xl mt-6 rounded-full text-md"
      >
        {loading ? "در حال ارسال..." : "ثبت سفارش"}
      </button>
    </div>
  );
};

export default CartSummaryPage;
