import React from "react";

interface Props {
  userName: string;
  subHeader: string;
}

function FeedsHeader({ userName, subHeader }: Props) {
  return (
    <div className="flex flex-col mb-8">
      <label className="text-light-white text-2xl mb-2">Hello {userName}</label>
      <label>{subHeader}</label>
    </div>
  );
}

export default FeedsHeader;
