import React from "react";
import { Route, Routes } from "react-router-dom";
import { Feed } from "./components/Feed/Feed";
import { UserHeader } from "./components/UserHeader/UserHeader";
import { UserPhotoPost } from "./components/UserPhotoPost/UserPhotoPost";
import { UserStats } from "./components/UserStats/UserStats";

export const User = () => {
  
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/userPhotoPost" element={<UserPhotoPost />} />
        <Route path="/userStats" element={<UserStats />} />
      </Routes>
    </section>
  );
};
