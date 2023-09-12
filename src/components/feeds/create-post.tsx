import React from "react";

import InputButton from "../shared/input-button";
import MessageBox from "./message-box";

import { CREATE_POST, POST } from "../../utils/labels";

function CreatePost() {
  return (
    <div className="flex flex-col bg-dark-gray min-h-fit w-full border-2 rounded-md border-border p-8">
      <div className="flex flex-col w-full mb-4 text-light-white text-xl">
        {CREATE_POST}
      </div>
      <MessageBox reactionIndex={2} />
      <div className="flex justify-end">
        <InputButton classes="w-fit px-8 text-md" label={POST} />
      </div>
    </div>
  );
}

export default CreatePost;
