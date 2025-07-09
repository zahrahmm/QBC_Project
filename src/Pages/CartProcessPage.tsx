import { useState, useEffect } from "react";
import { useCartStore } from "../stores/cartStore";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/Cart/Stepper";

const CartProcess = () => {
  const { address, setAddress, paymentMethod, setPaymentMethod } =
    useCartStore();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    address: "",
    city: "",
    country: "",
    postal: "",
    payment: paymentMethod || "pasargad",
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      ...address,
      payment: paymentMethod,
    }));
  }, [address, paymentMethod]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.address || !form.city || !form.country || !form.postal) {
      alert("تمام اطلاعات را وارد کنید!!");
      return;
    }

    setAddress({
      address: form.address,
      city: form.city,
      country: form.country,
      postal: form.postal,
    });

    setPaymentMethod(form.payment);
    navigate("/cart/summary");
  };

  return (
    <div className="bg-[#121212] min-h-screen flex flex-col items-center py-12 text-right">
      <div className="w-full h-1/2 flex justify-center">
        <Stepper activeStep={1} />
      </div>
      <h2 className="font-bold text-2xl mb-2 text-white text-right">
        آدرس دریافت
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-xl items-end text-right mt-2"
        autoComplete="off"
      >
        {["address", "city", "country", "postal"].map((field) => (
          <div key={field} className="w-full text-right">
            <label
              htmlFor={field}
              className="text-white w-full block text-right mb-1"
            >
              {field === "address"
                ? "آدرس"
                : field === "city"
                ? "شهر"
                : field === "country"
                ? "کشور"
                : "کدپستی"}
            </label>
            <input
              id={field}
              name={field}
              value={form[field as keyof typeof form]}
              onChange={handleChange}
              placeholder={`${
                field === "address"
                  ? "آدرس"
                  : field === "city"
                  ? "شهر"
                  : field === "country"
                  ? "کشور"
                  : "کدپستی"
              } را وارد نمایید`}
              className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#353535] text-white text-lg focus:outline-none focus:border-pink-500 transition-all"
              dir="rtl"
            />
          </div>
        ))}

        <label className="text-gray-300 mt-4 w-full text-right">
          روش پرداخت
        </label>
        <div className="w-full flex items-center gap-2 justify-end">
          <input
            type="radio"
            id="pasargad"
            name="payment"
            value="pasargad"
            checked={form.payment === "pasargad"}
            onChange={handleChange}
            className="accent-pink-600"
          />
          <label
            htmlFor="pasargad"
            className="text-white cursor-pointer w-full text-right block"
          >
            درگاه پرداخت پاسارگاد
          </label>
        </div>

        <div className="w-full flex items-center gap-2 justify-end">
          <input
            type="radio"
            id="zarinpal"
            name="payment"
            value="zarinpal"
            checked={form.payment === "zarinpal"}
            onChange={handleChange}
            className="accent-pink-600"
          />
          <label
            htmlFor="zarinpal"
            className="text-white cursor-pointer w-full text-right block"
          >
            درگاه پرداخت زرین‌پال
          </label>
        </div>

        <button
          type="submit"
          className="w-full md-8 py-3 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-lg font-bold transition-all"
        >
          ادامه
        </button>
      </form>
    </div>
  );
};

export default CartProcess;
