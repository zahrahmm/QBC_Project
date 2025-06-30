import React, { useState } from "react";
import InputField from "./inputField";
import { Link } from "react-router-dom";
import server from "../../utils/axios";
import { useAuthStore } from "../../stores/useAuthStore";

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

  const Login_URL = "/api/users/auth";
  const { user, isAuthenticated, login, logout } = useAuthStore();

  const handleLogin = async () => {
    try {
      const response = await server.post(
        Login_URL,
        JSON.stringify({
          email: formData.email,
          password: formData.password,
        })
      );

      const mockUser = response.data;
      const mockToken = response.data.access;

      login(mockUser, mockToken);

      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("token", mockToken);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form
          className="flex flex-col flex-1 px-16 mt-[77px] "
          id="LogInPageForm"
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

          <button onClick={handleLogin} className="btn btn-secondary w-30 mt-6">
            ورود
          </button>

          <p className="mt-4">
            عضو نیستید؟
            <Link to="/register" className="text-secondary cursor-pointer">
              ثبت نام
            </Link>
          </p>
        </form>
      )}
    </>
  );
}

export default LoginForm;
