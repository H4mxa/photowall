import React from "react";
import PhotoWall from "../components/PhotoWall";
import Title from "../components/Title";

const Home = (props) => {
  const posts = props.posts;
  return (
    <div>
      <Title title="Photowall" />
      <PhotoWall posts={posts} onRemovedPhoto={props.onRemovedPhoto} />
    </div>
  );
};

export default Home;
