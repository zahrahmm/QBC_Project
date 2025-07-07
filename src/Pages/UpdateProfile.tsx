import { useState } from "react";

const UpdateProfile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: form.name ? "" : "نام الزامی است",
      email: form.email ? "" : "ایمیل الزامی است",
      password: form.password ? "" : "رمز عبور الزامی است",
      repeatPassword: form.repeatPassword ? "" : "تکرار رمز عبور الزامی است",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error !== "");
    if (hasError) return;
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-26 text-right">
      <h2 className="font-bold text-2xl mb-4 w-full text-right max-w-xl">
        بروزرسانی پروفایل
      </h2>
      <form
        onSubmit={handleUpdate}
        className="flex flex-col gap-6 w-full max-w-xl items-end text-right"
      >
        <div className="w-full">
          <label className="block mb-1" htmlFor="name">
            نام
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="نام خود را وارد نمایید"
            className={`input w-full px-4 py-3 rounded-lg border  text-lg  focus:border-secondary
    ${errors.name ? "border-secondary" : ""}`}
            dir="rtl"
          />
          {errors.name && (
            <p className="text-pink-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="w-full">
          <label className=" block mb-1" htmlFor="email">
            ایمیل
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ایمیل خود را وارد نمایید"
            className={`input w-full px-4 py-3 rounded-lg border text-lg  focus:border-secondary
    ${errors.email ? "border-secondary" : ""}`}
            dir="rtl"
          />
          {errors.email && (
            <p className="text-pink-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="w-full">
          <label className="block mb-1" htmlFor="password">
            رمز عبور
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="رمز عبور خود را وارد نمایید"
            className={`input w-full px-4 py-3 rounded-lg border text-lg  focus:border-secondary
    ${errors.password ? "border-secondary" : ""}`}
            dir="rtl"
          />
          {errors.password && (
            <p className="text-pink-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <div className="w-full">
          <label className="block mb-1" htmlFor="repeatPassword">
            تکرار رمز عبور
          </label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            value={form.repeatPassword}
            onChange={handleChange}
            placeholder="تکرار رمز عبور خود را وارد نمایید"
            className={`input w-full px-4 py-3 rounded-lg border text-lg  focus:border-secondary
    ${errors.repeatPassword ? "border-secondary" : ""}`}
            dir="rtl"
          />
          {errors.repeatPassword && (
            <p className="text-pink-500 text-sm mt-1">
              {errors.repeatPassword}
            </p>
          )}
        </div>

        <div className="w-full flex justify-between mt-4">
          <button
            type="button"
            className="btn btn-secondary px-4 py-3 text-lg font-bold"
          >
            سفارشات من
          </button>
          <button
            type="submit"
            className="btn btn-secondary px-4 py-3 text-lg font-bold"
          >
            بروزرسانی
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
