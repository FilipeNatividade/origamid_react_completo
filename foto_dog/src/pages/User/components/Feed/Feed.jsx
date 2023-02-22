import React from "react";
import { FeedModal } from "./components/FeedModal/FeedModal";
import { FeedPhotos } from "./components/FeedPhotos/FeedPhotos";

export const Feed = () => {
  return (
    <div>
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};
