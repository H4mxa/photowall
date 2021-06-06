import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPhotoPage from "Pages/AddPhoto";
import HomePage from "Pages/Home";

import { createStore } from "redux";
import postReducer from "reducers/index";

const store = createStore(postReducer);

class App extends Component {
  constructor() {
    // initialize state of components
    super();

    this.removePhoto = this.removePhoto.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }

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

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.posts);
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/AddPhoto"
              render={({ history }) => (
                <AddPhotoPage
                  onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost);
                    history.push("/");
                  }}
                />
              )}
            />
            <Route path="/">
              <HomePage
                posts={this.state.posts}
                onRemovedPhoto={this.removePhoto}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
