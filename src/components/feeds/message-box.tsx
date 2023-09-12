import React from "react";
import { POST_PLACEHOLDER } from "../../utils/labels";
import Reaction from "./reaction";

interface Props {
  reactionIndex: number;
  msg?: string;
  readonly?: boolean;
}

function MessageBox({ msg, readonly, reactionIndex }: Props) {
  return (
    <div
      className={`flex bg-dark-black w-full p-4 rounded-md ${
        readonly ? "" : "items-center"
      }`}
    >
      <Reaction index={reactionIndex} />
      {readonly ? (
        <label className="flex-1 ml-4 text-md">{msg}</label>
      ) : (
        <textarea
          className="bg-dark-black outline-none flex-1 resize-none ml-4 min-h-fit"
          rows={1}
          placeholder={POST_PLACEHOLDER}
        />
      )}
    </div>
  );
}

export default MessageBox;
