import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPhotoPage from "Pages/AddPhoto";
import HomePage from "Pages/Home";

import { Provider } from "react-redux";
import initStore from "store/index";

const store = initStore();

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route
              path="/AddPhoto"
              render={({ history }) => (
                <AddPhotoPage
                  onAddPhoto={(addedPost) => {
                    this.addPhoto(addedPost);
                    history.push("/");
                  }}
                />
              )}
            /> */}
            <Route path="/AddPhoto">
              <AddPhotoPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
