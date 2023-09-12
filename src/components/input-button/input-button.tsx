import React from "react";

interface Props {
  label: string;
}

function InputButton({ label }: Props) {
  return (
    <input
      type="submit"
      className="bg-blue text-white w-full p-2 mt-4 rounded-md"
      value={label}
    />
  );
}

export default InputButton;
