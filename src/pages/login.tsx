import React from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/login-form";
import Logo from "../assets/icons/logo";

function Login() {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/feeds");
  };

  return (
    <div className="flex justify-center w-full items-center min-h-full">
      <div className="flex flex-col w-2/3 lg:w-1/3 min-h-2/4 items-center ">
        <Logo classes="mb-8" />
        <LoginForm onSubmitHandler={onLogin} />
      </div>
    </div>
  );
}

export default Login;
