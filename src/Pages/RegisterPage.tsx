// import React from 'react';
import loginPageImage from "../assets/loginPage.png";
import RegisterForm from "../components/register/RegisterForm";

function RegisterPage() {
  return (
    <div className="loginPageContainer flex min-h-full min-w-full max-h-screen">
      <RegisterForm />

      <div className="my-16 ml-16 max-h-screen max-w-[50%] rounded-xl">
        <img
          src={loginPageImage}
          alt=""
          className="object-cover h-full w-full overflow-hidden rounded-xl  "
        />
      </div>
    </div>
  );
}

export default RegisterPage;
