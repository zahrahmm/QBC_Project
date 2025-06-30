import React, { useState } from "react";
import InputField from "../../components/LoginPage/inputField"; //
// import Button from "../button/button";
import { Link } from "react-router-dom";
import server from "../../utils/axios";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const Register_URL = "/api/users";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("رمزعبور مطابقت ندارد!");
      return;
    } else {
      try {
        const response = await server.post(
          Register_URL,
          JSON.stringify({
            username: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          })
        );
        console.log(formData);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-1 px-16 mt-[77px]"
    >
      <p className="mb-8 text-2xl ">ورود</p>

      <InputField
        label="نام"
        type="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="نام خود را وارد کنید"
        style="mb-[24px]"
        name="name"
      />
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
        label="رمزعبور"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="رمزعبور خود را وارد کنید"
        style="mb-[24px]"
        name="password"
      />

      <InputField
        label="تکرار رمزعبور"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="تکرار رمزعبور خود را وارد کنید"
        style=""
        name="confirmPassword"
      />

      <button className="btn btn-secondary w-30 mt-6">ثبت نام</button>
      <p className="mt-4">
        عضو هستید؟
        <Link to="/Login" className="text-secondary cursor-pointer">
          ورود
        </Link>
      </p>
    </form>
  );
}

export default RegisterForm;
