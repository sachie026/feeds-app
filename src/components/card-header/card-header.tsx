import React from "react";

interface Props {
  header: string;
  subHeader: string;
}

function CardHeader({ header, subHeader }: Props) {
  return (
    <>
      <label className="uppercase text-mid-gray text-sm mb-1">
        {subHeader}
      </label>
      <label className="text-white text-lg">{header}</label>
    </>
  );
}

export default CardHeader;
