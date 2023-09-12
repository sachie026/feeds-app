import React, { useState, useCallback } from "react";

import useUser from "../hooks/useUser";
import CreatePost from "../components/feeds/create-post";
import FeedsHeader from "../components/feeds/feeds-header";

import { FEEDS_SUBHEADER } from "../utils/labels";
import { posts } from "../utils/data";
import FeedsList from "../components/feeds";
import Modal from "../components/shared/modal";
import SignupForm from "../components/signup-form";
import LoginForm from "../components/login-form";

function Feeds() {
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(1);

  const hideModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const viewModal = useCallback(() => {
    setModalIndex(1);
    setShowModal(true);
  }, []);

  const updateIndex = useCallback((index: number) => {
    setModalIndex(index);
  }, []);

  return (
    <div className="flex flex-col h-full w-3/4 lg:w-2/4 py-16 text-mid-gray">
      <FeedsHeader userName={user.firstname} subHeader={FEEDS_SUBHEADER} />

      <div onClick={viewModal}>
        <CreatePost />
        <FeedsList posts={posts} />
      </div>

      {showModal && (
        <Modal onClose={hideModal}>
          {modalIndex === 1 ? (
            <SignupForm hideModal={hideModal} updateIndex={updateIndex} />
          ) : (
            <LoginForm onSubmitHandler={hideModal} updateIndex={updateIndex} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default Feeds;
