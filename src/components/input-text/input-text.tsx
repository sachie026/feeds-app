import React from "react";

interface Props {
  label: string;
  placeholder: string;
}

function InputText({ label, placeholder }: Props) {
  return (
    <div className="flex flex-col w-full mb-4">
      <label className="text-mid-gray text-sm mb-1 text-light-white">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-mid-gray bg-dark-gray rounded-md py-2 px-4 text-white"
      />
    </div>
  );
}

export default InputText;
