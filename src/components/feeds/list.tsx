import React from "react";

import Options from "../../assets/icons/options";
import MessageBox from "./message-box";
import MsgIcon from "../../assets/icons/msg";

import { Post } from "../../utils/data";
import { COMMENTS } from "../../utils/labels";

interface Props {
  posts: Post[];
}

function FeedsList({ posts }: Props) {
  return (
    <div className="flex flex-col mb-8">
      {posts.map((post: Post, index: number) => {
        return (
          <div
            key={`post${index}`}
            className="flex flex-col bg-dark-gray min-h-fit w-full border-2 rounded-md border-border p-8 mt-4"
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16">
                <img
                  className="rounded-full"
                  src={post?.profilePic}
                  alt="User profile"
                />
              </div>
              <div className="flex text-light-white flex-1 ml-4 font-md">
                <div className="mr-2">{post.firstName}</div>
                <div>{post.lastName}</div>
              </div>
              <div>
                <Options classes="stroke-light-white w-8 h-8" />
              </div>
            </div>
            <MessageBox
              reactionIndex={post.feeling}
              msg={post.message}
              readonly
            />
            {!!post.commentsCount && (
              <div className="flex items-center mt-4">
                <MsgIcon classes="stroke-light-white w-6 h-6 mr-2" />{" "}
                {post.commentsCount} {COMMENTS}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FeedsList;
