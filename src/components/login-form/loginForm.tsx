import React from "react";

import InputText from "../input-text";
import InputPassword from "../input-password";
import CardHeader from "../card-header/card-header";
import InputButton from "../input-button";
import CardFooter from "../card-footer";

import {
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  PW_LABEL,
  PW_PLACEHOLDER,
  WELCOME,
  LOGIN_NOW,
  LOGIN_HEADER,
  REGISTER,
  NOT_REGISTERED,
} from "../../utils/labels";

function LoginForm() {
  return (
    <div className="flex bg-dark-gray h-full w-full border rounded-md border-mid-gray">
      <form className="flex flex-col w-full p-8">
        <CardHeader header={LOGIN_HEADER} subHeader={WELCOME} />

        <InputText label={EMAIL_LABEL} placeholder={EMAIL_PLACEHOLDER} />
        <InputPassword label={PW_LABEL} placeholder={PW_PLACEHOLDER} forgotPw />

        <InputButton label={LOGIN_NOW} />
        <CardFooter
          header={REGISTER}
          subHeader={NOT_REGISTERED}
          onClick={() => {}}
        />
      </form>
    </div>
  );
}

export default LoginForm;
