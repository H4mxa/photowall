import React from "react";
import Photo from "./Photo";
const PhotoWall = (props) => {
  const posts = props.posts;
  return (
    <div className="photogrid">
      {posts.map((post, id) => (
        <Photo key={id} post={post} onRemovedPhoto={props.onRemovedPhoto} />
      ))}
    </div>
  );
};

export default PhotoWall;
