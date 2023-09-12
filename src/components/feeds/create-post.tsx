import React from "react";

import InputButton from "../shared/input-button";
import MessageBox from "./message-box";

import { CREATE_POST, POST, DEFAULT_REACTION } from "../../utils/labels";

function CreatePost() {
  return (
    <div className="flex flex-col bg-dark-gray min-h-fit w-full border-2 rounded-md border-border p-8 cursor-pointer">
      <div className="flex flex-col w-full mb-4 text-light-white text-xl">
        {CREATE_POST}
      </div>
      <MessageBox reaction={DEFAULT_REACTION} />
      <div className="flex justify-end">
        <InputButton classes="w-fit px-8 text-md" label={POST} />
      </div>
    </div>
  );
}

export default CreatePost;
