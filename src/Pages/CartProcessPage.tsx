import { useState } from "react";
import Stepper from "../components/Cart/Stepper";

const CartProcess = () => {
  const [form, setForm] = useState({
    address: "",
    city: "",
    country: "",
    postal: "",
    custom: "",
    payment: "pasargad",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <label className="text-white w-full text-right" htmlFor="address">
          آدرس
        </label>
        <input
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="آدرس را وارد نمایید"
          className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#353535] text-white text-lg focus:outline-none focus:border-pink-500 transition-all"
          dir="rtl"
        />

        <label className="text-white w-full text-right" htmlFor="city">
          شهر
        </label>
        <input
          id="city"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="شهر را وارد نمایید"
          className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#353535] text-white text-lg focus:outline-none focus:border-pink-500 transition-all"
          dir="rtl"
        />

        <label className="text-white w-full text-right" htmlFor="country">
          کشور
        </label>
        <input
          id="country"
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="کشور را وارد نمایید"
          className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#353535] text-white text-lg focus:outline-none focus:border-pink-500 transition-all"
          dir="rtl"
        />

        <label className="text-white w-full text-right" htmlFor="postal">
          کدپستی
        </label>
        <input
          id="postal"
          name="postal"
          value={form.postal}
          onChange={handleChange}
          placeholder="کدپستی را وارد نمایید"
          className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#353535] text-white text-lg focus:outline-none focus:border-pink-500 transition-all"
          dir="rtl"
        />

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
