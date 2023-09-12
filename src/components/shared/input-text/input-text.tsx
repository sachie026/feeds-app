import React from "react";

interface Props {
  label: string;
  placeholder: string;
  value?: string;
}

function InputText({ label, placeholder, value }: Props) {
  return (
    <div className="flex flex-col w-full mb-4">
      <label className="text-mid-gray text-sm mb-1 text-light-white">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className="border border-border bg-dark-gray rounded-md py-2 px-4 text-white"
      />
    </div>
  );
}

export default React.memo(InputText);
