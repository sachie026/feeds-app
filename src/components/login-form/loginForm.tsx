import React from "react";

import InputText from "../input-text";
import InputPassword from "../input-password";

import {
  EMAIL_LABEL,
  EMAIL_PLACEHOLDER,
  PW_LABEL,
  PW_PLACEHOLDER,
  WELCOME,
  LOGIN_HEADER,
} from "../../utils/labels";
import CardHeader from "../card-header/card-header";

function LoginForm() {
  return (
    <div className="flex bg-dark-gray h-full w-full border rounded-md border-border">
      <div className="flex flex-col items-center w-full my-8">
        <CardHeader header={LOGIN_HEADER} subHeader={WELCOME} />

        <InputText label={EMAIL_LABEL} placeholder={EMAIL_PLACEHOLDER} />
        <InputPassword label={PW_LABEL} placeholder={PW_PLACEHOLDER} />
      </div>
    </div>
  );
}

export default LoginForm;
