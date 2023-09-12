import React from "react";
import Arrow from "../../../assets/icons/arrow";

interface Props {
  header: string;
  subHeader: string;
  onClick: () => void;
}

function CardFooter({ header, subHeader, onClick }: Props) {
  return (
    <div className="flex items-center text-sm mt-4 mb-2" onClick={onClick}>
      <label className="text-mid-gray cursor-pointer">{subHeader}</label>
      <label className="text-light-white ml-1 cursor-pointer">{header}</label>
      <Arrow classes="stroke-light-white cursor-pointer" />
    </div>
  );
}

export default React.memo(CardFooter);
