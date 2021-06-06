import React from "react";

const AddPhoto = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;

    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };

    if (description && imageLink) {
      props.onAddPhoto(post);
    }
  };

  return (
    <div>
      <h1 className="main-title">Photowall</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="link" placeholder="Link" />
          <input type="text" name="description" placeholder="Description" />
          <button className="post-button">POST</button>
        </form>
      </div>
    </div>
  );
};

export default AddPhoto;
