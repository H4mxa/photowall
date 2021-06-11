import React from "react";
import Title from "../components/Title";
import PhotoWall from "../components/PhotoWall";
import { connect } from "react-redux";

import { fetchServices, removePost } from "actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchImages();
    // this.props.removePost();
  }

  render() {
    // const { posts } = this.props;
    return (
      <div>
        <Title title="Photowall" />
        <PhotoWall {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts.items };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchServices()),
    removePost: (e) => dispatch(removePost(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Title from "../components/Title";
// import PhotoWall from "../components/PhotoWall";
// import { fetchServices, removePost } from "actions";

// function Home() {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.posts.items);

//   useEffect(() => {
//     fetchServices();
//     removePost(1);
//   }, [dispatch, fetchServices, removePost]);

//   return (
//     <div>
//       <Title title="Photowall" />
//       <PhotoWall posts={posts} />
//     </div>
//   );
// }
// export default Home
