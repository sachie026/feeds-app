import React from "react";
import LoginForm from "../components/login-form";
import Logo from "../assets/icons/logo";

function Login() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col w-1/3 h-2/4 items-center ">
        <Logo classes="mb-8" />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
