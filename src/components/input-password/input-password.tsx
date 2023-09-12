import React from "react";

interface Props {
  label: string;
  placeholder: string;
}

function InputPassword({ label, placeholder }: Props) {
  return (
    <div className="flex flex-col">
      <label className="text-mid-gray text-sm mb-1">{label}</label>
      <input type="password" placeholder={placeholder} />
    </div>
  );
}

export default InputPassword;
