import React from "react";
import Title from "../components/Title";
import PhotoWall from "../components/PhotoWall";

const Home = (props) => {
  return (
    <div>
      <Title title="Photowall" />
      <PhotoWall posts={props.posts} onRemovedPhoto={props.onRemovedPhoto} />
    </div>
  );
};

export default Home;
