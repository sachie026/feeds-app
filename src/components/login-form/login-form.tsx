import React, { useCallback } from "react";

import InputText from "../shared/input-text";
import InputPassword from "../shared/input-password";
import CardHeader from "../shared/card-header";
import InputButton from "../shared/input-button";
import CardFooter from "../shared/card-footer";

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

interface Props {
  onSubmitHandler: () => void;
  updateIndex?: (index: number) => void;
}

function LoginForm({ onSubmitHandler, updateIndex }: Props) {
  const onRegisterClick = useCallback(() => {
    updateIndex && updateIndex(1);
  }, [updateIndex]);

  return (
    <div className="flex bg-dark-gray h-full w-full border rounded-md border-mid-gray">
      <form className="flex flex-col w-full p-8" onSubmit={onSubmitHandler}>
        <CardHeader header={LOGIN_HEADER} subHeader={WELCOME} />

        <InputText label={EMAIL_LABEL} placeholder={EMAIL_PLACEHOLDER} />
        <InputPassword label={PW_LABEL} placeholder={PW_PLACEHOLDER} forgotPw />

        <InputButton label={LOGIN_NOW} onSubmitHandler={onSubmitHandler} />
        <CardFooter
          header={REGISTER}
          subHeader={NOT_REGISTERED}
          onClick={onRegisterClick}
        />
      </form>
    </div>
  );
}

export default LoginForm;
