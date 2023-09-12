import React from "react";
import { reactions } from "../../utils/data";

interface Props {
  index: number;
}

function Reaction({ index }: Props) {
  return (
    <div className="p-2 w-12 h-12 flex items-center justify-center bg-dark-gray rounded-full">
      <label className="text-lg">{reactions[index]}</label>
    </div>
  );
}

export default Reaction;
