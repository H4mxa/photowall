import React from "react";
import Photo from "./Photo";
const PhotoWall = (props) => {
  const posts = props.posts;
  return (
    <div>
      {/* <button
        className="addIcon"
        onClick={() => {
          props.onNavigate();
        }}
      ></button> */}

      <a
        className="addIcon"
        onClick={() => {
          props.onNavigate();
        }}
        href="#../Pages/AddPhoto"
      ></a>

      <div className="photogrid">
        {posts.map((post, id) => (
          <Photo key={id} post={post} onRemovedPhoto={props.onRemovedPhoto} />
        ))}
      </div>
    </div>
  );
};

export default PhotoWall;
