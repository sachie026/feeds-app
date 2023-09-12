import React from "react";

import Options from "../../assets/icons/options";
import { getTimeDiff } from "../../utils/utility";

interface Props {
  firstName: string;
  lastName: string;
  createdAt: string;
  profilePic: string;
}

function FeedCardHeader({ profilePic, firstName, lastName, createdAt }: Props) {
  return (
    <div className="flex items-center mb-4">
      <div className="w-16 h-16">
        <img
          className="rounded-full"
          src={profilePic}
          alt="User profile"
          loading="lazy"
        />
      </div>
      <div className="flex text-light-white flex-1 ml-4 font-md flex-col">
        <div className="mr-2">
          {firstName} {lastName}
        </div>
        <div className="text-mid-gray text-sm">{getTimeDiff(createdAt)}</div>
      </div>
      <div>
        <Options classes="stroke-light-white w-8 h-8" />
      </div>
    </div>
  );
}

export default FeedCardHeader;
