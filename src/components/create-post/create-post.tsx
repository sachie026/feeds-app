import React from "react";
import { CREATE_POST, POST_PLACEHOLDER, POST } from "../../utils/labels";
import MsgIcon from "../../assets/icons/msg";
import InputButton from "../input-button";

function CreatePost() {
  return (
    <div className="flex flex-col bg-dark-gray min-h-fit w-full border-2 rounded-md border-border p-8">
      <div className="flex flex-col w-full mb-4 text-light-white text-xl">
        {CREATE_POST}
      </div>
      <div className="flex bg-dark-black w-full items-center p-4 rounded-md">
        <div className="p-2 bg-dark-gray rounded-full">
          <MsgIcon classes="fill-white w-8 h-8" />
        </div>
        <textarea
          className="bg-dark-black outline-none flex-1 resize-none ml-4 min-h-fit"
          rows={1}
          placeholder={POST_PLACEHOLDER}
        />
      </div>
      <div className="flex justify-end">
        <InputButton classes="w-fit px-8 text-md" label={POST} />
      </div>
    </div>
  );
}

export default CreatePost;
