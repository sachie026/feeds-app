import React from "react";

import useUser from "../hooks/useUser";
import { FEEDS_SUBHEADER } from "../utils/labels";
import CreatePost from "../components/create-post";
import FeedsHeader from "../components/feeds-header";

function Feeds() {
  const { user } = useUser();

  return (
    <div className="flex flex-col h-full w-full py-16 px-96 text-mid-gray">
      <FeedsHeader userName={user.firstname} subHeader={FEEDS_SUBHEADER} />
      <CreatePost />
    </div>
  );
}

export default Feeds;
