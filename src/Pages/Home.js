import React from "react";
import Title from "../components/Title";
import PhotoWall from "../components/PhotoWall";
import { connect } from "react-redux";

import { fetchServices } from "actions";

class Home extends React.Component {
  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  addPhoto(postSubmitted) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted]),
    }));
  }

  componentDidMount(prevProps, prevState) {
    // console.log(prevState.posts);
    // console.log(this.state);
    debugger;
    this.props.dispatch(fetchServices());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <Title title="Photowall" />
        <PhotoWall posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ posts: state.posts.items });

export default connect(mapStateToProps)(Home);
