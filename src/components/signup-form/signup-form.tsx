import React from "react";

import InputText from "../input-text";
import InputPassword from "../input-password";
import CardHeader from "../card-header/card-header";
import InputButton from "../input-button";
import CardFooter from "../card-footer";

import {
  PW_LABEL,
  SIGNUP_PW_PLACEHOLDER,
  SIGN_UP,
  CREATE_ACCOUNT,
  EMAIL,
  USERNAME,
  SIGNUP_EMAIL_PLACEHOLDER,
  SIGNUP_UN_PLACEHOLDER,
  LOGIN,
  ALREADY_USER,
  CONTINUE,
} from "../../utils/labels";

function SignupForm() {
  return (
    <div className="flex bg-dark-gray h-full w-full border rounded-md border-mid-gray">
      <form className="flex flex-col w-full p-8">
        <CardHeader header={CREATE_ACCOUNT} subHeader={SIGN_UP} />

        <InputText label={EMAIL} placeholder={SIGNUP_EMAIL_PLACEHOLDER} />
        <InputText label={USERNAME} placeholder={SIGNUP_UN_PLACEHOLDER} />
        <InputPassword
          label={PW_LABEL}
          placeholder={SIGNUP_PW_PLACEHOLDER}
          forgotPw
        />

        <InputButton label={CONTINUE} />
        <CardFooter
          header={LOGIN}
          subHeader={ALREADY_USER}
          onClick={() => {}}
        />
      </form>
    </div>
  );
}

export default SignupForm;
