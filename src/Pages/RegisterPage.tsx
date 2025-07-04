// import React from 'react';
import loginPageImage from "../assets/image 3.png";
import RegisterForm from "../components/register/RegisterForm";

function RegisterPage() {
  return (
    <div className="loginPageContainer flex min-w-full h-screen">
      <RegisterForm />

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

export default RegisterPage;
