import React from "react";
import { Link } from "react-router-dom";
import Photo from "./Photo";

const PhotoWall = (props) => {
  const posts = props.posts;
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto"></Link>

      <div className="photogrid">
        {posts
          .sort((x, y) => {
            return y.id - x.id;
          })
          .map((post, id) => (
            <Photo key={id} post={post} onRemovedPhoto={props.onRemovedPhoto} />
          ))}
      </div>
    </div>
  );
};

export default PhotoWall;
