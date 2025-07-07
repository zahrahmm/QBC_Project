import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginFunction } from "../../utils/login";
import InputField from "./inputField";
import { useAuthStore } from "../../stores/useAuthStore";
import { toast } from "sonner";

interface FormData {
  email: string;
  password: string;
}

function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await loginFunction(formData);
      login(response);
      toast.success("کاربر وارد شد.");
      navigate("/");
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("اطلاعات صحیح نمی باشد.");
    }
  };

  return (
    <form
      className="flex flex-col flex-1 px-16 mt-[77px] "
      id="LogInPageForm"
      onSubmit={handleLogin}
    >
      <p className="mb-8 text-2xl ">ورود</p>
      <InputField
        label="ایمیل"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ایمیل خود را وارد کنید"
        style="mb-[24px]"
        name="email"
      />
      <InputField
        label="رمز عبور"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="رمز عبور خود را وارد کنید"
        style=""
        name="password"
      />
      <button className="btn btn-secondary w-30 mt-6">ورود</button>
      <p className="mt-4">
        عضو نیستید؟
        <Link to="/register" className="text-secondary cursor-pointer">
          ثبت نام
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
