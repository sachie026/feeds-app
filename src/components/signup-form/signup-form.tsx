import React, { useCallback } from "react";

import InputText from "../shared/input-text";
import InputPassword from "../shared/input-password";
import CardHeader from "../shared/card-header";
import InputButton from "../shared/input-button";
import CardFooter from "../shared/card-footer";

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

interface Props {
  hideModal: () => void;
  updateIndex?: (index: number) => void;
}

function SignupForm({ hideModal, updateIndex }: Props) {
  const onLoginClick = useCallback(() => {
    updateIndex && updateIndex(2);
  }, [updateIndex]);

  return (
    <div className="flex bg-dark-gray h-full w-full border rounded-md border-mid-gray">
      <form className="flex flex-col w-full p-8" onSubmit={hideModal}>
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
          onClick={onLoginClick}
        />
      </form>
    </div>
  );
}

export default SignupForm;
