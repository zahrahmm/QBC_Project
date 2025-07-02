import React, { useState } from "react";
import InputField from "./inputField";
import { Link } from "react-router-dom";
import { login } from "../../utils/login";

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

  // const Login_URL = "/api/users/auth";

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(formData); // 👈 call your function
    } catch (error) {
      console.error("Login failed", error);
      alert("اطلاعات صحیح نمی باشد.");
    }
    // try {
    //   const response = await server.post(
    //     Login_URL,
    //     JSON.stringify({
    //       email: formData.email,
    //       password: formData.password,
    //     })
    //   );
    //   console.log(formData);
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
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
