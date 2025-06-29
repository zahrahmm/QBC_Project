import React, { useState } from "react";
import InputField from "./inputField"; // فرض می‌کنم این فایل وجود داره
import Button from "../button/button";
import { Link } from "react-router-dom";
// import mockData from "../../data/users";

interface FormData {
  email: string;
  password: string;
}

function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleClick = () => {
    console.log(`کلیک شد `);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = mockData.users.find(
      (user: { username: string; password: string }) =>
        user.username === formData.email && user.password === formData.password
    );

    if (user) {
      alert("Login");
    } else {
      alert("ah");
    }
  };

  return (
    <form
      className="flex flex-col flex-1 px-16 mt-[77px] "
      id="LogInPageForm"
      onSubmit={handleLogin}
    >
      <p className="text-black mb-8 text-2xl ">ورود</p>

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

      <Button
        type="submit"
        text="ورود"
        onClick={handleClick}
        disabled={false}
        loading={false}
        variant="button2"
        style="h-[48px] w-[74px] mt-[32px]"
      />
      <p className="text-black mt-4">
        عضو نیستید؟
        <Link to="/register" className="text-[#DB2777] cursor-pointer">
          ثبت نام
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
