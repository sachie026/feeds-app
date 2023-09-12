import React from "react";

import { Post } from "../../utils/data";
import FeedCard from "./card";

interface Props {
  posts: Post[];
}

function FeedsList({ posts }: Props) {
  return (
    <div className="flex flex-col mb-8">
      {posts.map((post: Post, index: number) => {
        return <FeedCard key={`post${index}`} post={post} />;
      })}
    </div>
  );
}

export default FeedsList;
