import React, { useState } from "react";
import InputField from "../../components/LoginPage/inputField"; //
import Button from "../button/button";
import { Link } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };
  const handleClick = () => {
    console.log(`کلیک شد `);
  };

  return (
    <form className="flex flex-col flex-1 px-16 mt-[77px]">
      <p className="mb-8 text-2xl ">ورود</p>

      <InputField
        label="نام"
        type="name"
        value={formData}
        onChange={handleChange}
        placeholder="نام خود را وارد کنید"
        style="mb-[24px]"
        name="name"
      />
      <InputField
        label="ایمیل"
        type="email"
        value={formData}
        onChange={handleChange}
        placeholder="ایمیل خود را وارد کنید"
        style="mb-[24px]"
        name="email"
      />
      <InputField
        label="رمزعبور"
        type="password"
        value={formData}
        onChange={handleChange}
        placeholder="رمزعبور خود را وارد کنید"
        style="mb-[24px]"
        name=""
      />

      <InputField
        label="تکرار رمزعبور"
        type="password"
        value={formData}
        onChange={handleChange}
        placeholder="تکرار رمزعبور خود را وارد کنید"
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
      <p className="mt-4">
        عضو هستید؟
        <Link to="/" className="text-secondary cursor-pointer">
          ورود
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
