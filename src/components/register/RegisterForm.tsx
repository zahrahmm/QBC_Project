import React, { useState } from "react";
import InputField from "../../components/LoginPage/inputField"; //
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../utils/register";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirm_Password: string;
};

function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirm_Password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_Password) {
      alert("رمزعبور مطابقت ندارد!");
      return;
    } else {
      try {
        const response = register(formData);
        navigate("/login");
        console.log(formData);
        console.log(response);
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
        value={formData.username}
        onChange={handleChange}
        placeholder="نام خود را وارد کنید"
        style="mb-[24px]"
        name="username"
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
        value={formData.confirm_Password}
        onChange={handleChange}
        placeholder="تکرار رمزعبور خود را وارد کنید"
        style=""
        name="confirm_Password"
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
