import React from "react";

const Photo = (props) => {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaptio>
        <p>{post.description}</p>
      </figcaptio>
      <div className="button-container">
        <button className="remove-button">Remove</button>
      </div>
    </figure>
  );
};

export default Photo;
