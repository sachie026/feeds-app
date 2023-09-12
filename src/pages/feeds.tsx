import React from "react";

import useUser from "../hooks/useUser";
import CreatePost from "../components/feeds/create-post";
import FeedsHeader from "../components/feeds/feeds-header";

import { FEEDS_SUBHEADER } from "../utils/labels";
import { posts } from "../utils/data";
import FeedsList from "../components/feeds";

function Feeds() {
  const { user } = useUser();

  return (
    <div className="flex flex-col h-full w-2/4 py-16 text-mid-gray">
      <FeedsHeader userName={user.firstname} subHeader={FEEDS_SUBHEADER} />
      <CreatePost />
      <FeedsList posts={posts} />
    </div>
  );
}

export default Feeds;
