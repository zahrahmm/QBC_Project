// import React from 'react';
import loginPageImage from "../assets/loginPage.png";
import LoginForm from "../components/LoginPage/LoginForm";

function LoginPage() {
  return (
    <div className="loginPageContainer flex min-w-full h-screen">
      <LoginForm />

      <div className="my-16 ml-16 max-w-[60%] rounded-xl">
        <img
          src={loginPageImage}
          alt=""
          className="object-cover h-full overflow-hidden rounded-xl"
        />
      </div>
    </div>
  );
}

export default LoginPage;
