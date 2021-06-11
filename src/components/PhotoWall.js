import React from "react";
import { Link } from "react-router-dom";
import Photo from "./Photo";

const PhotoWall = (props) => {
  // const posts = props.posts;
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto"></Link>

      <div className="photogrid">
        {props.posts
          .sort((x, y) => {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo key={index} post={post} {...props} index={index} />
          ))}
      </div>
    </div>
  );
};

export default PhotoWall;
