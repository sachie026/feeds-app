import React from "react";

interface Props {
  label: string;
  placeholder: string;
}

function InputText({ label, placeholder }: Props) {
  return (
    <div className="flex flex-col">
      <label className="text-mid-gray text-sm mb-1">{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default InputText;
