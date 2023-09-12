import React from "react";
import { FORGOT_PW } from "../../../utils/labels";
import Eye from "../../../assets/icons/eye";

interface Props {
  label: string;
  placeholder: string;
  forgotPw?: boolean;
  value?: string;
}

function InputPassword({ label, placeholder, forgotPw, value }: Props) {
  return (
    <div className="flex flex-col w-full mb-4">
      <div className="flex">
        <label className="text-mid-gray text-sm mb-1 flex-1 text-light-white">
          {label}
        </label>
        {forgotPw && (
          <label className="text-mid-gray text-sm mb-1 text-light-white">
            {FORGOT_PW}
          </label>
        )}
      </div>
      <div className="w-full flex flex-col relative justify-center">
        <input
          type="password"
          placeholder={placeholder}
          value={value}
          className="bg-dark-gray border border-border rounded-md py-2 px-4 text-white"
        />
        <Eye classes="absolute right-2 stroke-border" />
      </div>
    </div>
  );
}

export default React.memo(InputPassword);
