import React from "react";

interface Props {
  header: string;
  subHeader: string;
}

function CardHeader({ header, subHeader }: Props) {
  return (
    <div className="flex flex-col items-center mb-8">
      <label className="uppercase text-mid-gray text-sm mb-1">
        {subHeader}
      </label>
      <label className="text-white text-lg font-bold">{header}</label>
    </div>
  );
}

export default CardHeader;
