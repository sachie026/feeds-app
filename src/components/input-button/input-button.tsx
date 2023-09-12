import React from "react";

interface Props {
  label: string;
  onSubmitHandler?: () => void;
  classes?: string;
}

function InputButton({ label, classes }: Props) {
  return (
    <input
      type="submit"
      className={`bg-blue text-white p-2 mt-4 rounded-md cursor-pointer ${
        classes || "w-full"
      }`}
      value={label}
    />
  );
}

export default InputButton;
