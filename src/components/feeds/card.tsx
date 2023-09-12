import React from "react";

import MessageBox from "./message-box";
import MsgIcon from "../../assets/icons/msg";

import { Post } from "../../utils/data";
import { COMMENTS } from "../../utils/labels";
import FeedCardHeader from "./feed-card-header";

interface Props {
  post: Post;
}

function FeedCard({ post }: Props) {
  const {
    profilePic,
    firstName,
    lastName,
    createdAt,
    commentsCount,
    feeling,
    message,
  } = post;

  return (
    <div className="flex flex-col bg-dark-gray min-h-fit w-full border-2 rounded-md border-border p-8 mt-4 cursor-pointer">
      <FeedCardHeader
        profilePic={profilePic}
        firstName={firstName}
        lastName={lastName}
        createdAt={createdAt}
      />

      <MessageBox reaction={feeling} msg={message} readonly />

      {!!commentsCount && (
        <div className="flex items-center mt-4">
          <MsgIcon classes="stroke-light-white w-6 h-6 mr-2" />
          {commentsCount} {COMMENTS}
        </div>
      )}
    </div>
  );
}

export default React.memo(FeedCard);
