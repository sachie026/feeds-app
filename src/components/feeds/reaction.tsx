import React from "react";

interface Props {
  reaction: string;
}

function Reaction({ reaction }: Props) {
  return (
    <div className="p-2 w-12 h-12 flex items-center justify-center bg-dark-gray rounded-full">
      <label className="text-lg">{reaction}</label>
    </div>
  );
}

export default Reaction;
