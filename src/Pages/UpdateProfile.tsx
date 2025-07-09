import { useAuthStore } from "../stores/useAuthStore";
import { useEffect, useState } from "react";
import useUpdateProfile from "../utils/useUpdateProfile";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, login } = useAuthStore();
  const updateProfile = useUpdateProfile();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        username: user.username || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const { username, email, password, repeatPassword } = form;

    const newErrors = {
      username: username ? "" : "نام کاربری الزامی است",
      email: email ? "" : "ایمیل الزامی است",
      password: password ? "" : "رمز عبور الزامی است",
      repeatPassword: repeatPassword ? "" : "تکرار رمز عبور الزامی است",
    };

    if (password && repeatPassword && password !== repeatPassword) {
      newErrors.repeatPassword = "رمز عبور و تکرار آن یکسان نیستند";
    }

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error !== "");
    if (hasError) return;

    try {
      const updatedUser = await updateProfile.mutateAsync({
        username,
        email,
        password,
      });

      login(updatedUser);
      setSuccessMessage("پروفایل با موفقیت بروزرسانی شد ✅");
      setErrorMessage("");

      setForm((prev) => ({
        ...prev,
        password: "",
        repeatPassword: "",
      }));
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      setErrorMessage(
        axiosError.response?.data?.message || "خطا در بروزرسانی پروفایل ❌"
      );

      setSuccessMessage("");
    }
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
          <label className="block mb-1 font-semibold" htmlFor="username">
            نام
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            placeholder="نام کاربری خود را وارد نمایید"
            className={`input w-full px-4 py-3 rounded-lg border text-lg focus:border-secondary
              ${errors.username ? "border-secondary" : ""}`}
            dir="rtl"
          />
          {errors.username && (
            <p className="text-secondary text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div className="w-full">
          <label className="block mb-1 font-semibold" htmlFor="email">
            ایمیل
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ایمیل خود را وارد نمایید"
            className={`input w-full px-4 py-3 rounded-lg border text-lg focus:border-secondary
              ${errors.email ? "border-secondary" : ""}`}
            dir="rtl"
          />
          {errors.email && (
            <p className="text-secondary text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="w-full">
          <label className="block mb-1 font-semibold" htmlFor="password">
            رمز عبور جدید
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="رمز عبور جدید خود را وارد نمایید"
            className={`input w-full px-4 py-3 rounded-lg border text-lg focus:border-secondary
              ${errors.password ? "border-secondary" : ""}`}
            dir="rtl"
          />
          {errors.password && (
            <p className="text-secondary text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div className="w-full">
          <label className="block mb-1 font-semibold" htmlFor="repeatPassword">
            تکرار رمز عبور
          </label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="password"
            value={form.repeatPassword}
            onChange={handleChange}
            placeholder="تکرار رمز عبور خود را وارد نمایید"
            className={`input w-full px-4 py-3 rounded-lg border text-lg focus:border-secondary
              ${errors.repeatPassword ? "border-secondary" : ""}`}
            dir="rtl"
          />
          {errors.repeatPassword && (
            <p className="text-secondary text-sm mt-1">
              {errors.repeatPassword}
            </p>
          )}
        </div>

        {successMessage && (
          <div className="text-success font-semibold">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-error font-semibold">{errorMessage}</div>
        )}

        <div className="w-full flex justify-between mt-4">
          <button
            type="button"
            className="btn btn-secondary px-4 py-3 text-lg font-bold"
            onClick={() => navigate("/cart")}
          >
            سفارشات من
          </button>

          <button
            type="submit"
            className="btn btn-secondary px-4 py-3 text-lg font-bold"
            disabled={updateProfile.isPending}
          >
            {updateProfile.isPending ? "در حال ارسال..." : "بروزرسانی"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
