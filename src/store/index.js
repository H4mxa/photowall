import { createStore, combineReducers } from "redux";
import postReducer from "reducers";

const initStore = () => {
  const photoWallApp = combineReducers({
    posts: postReducer,
  });

  const browserSupport =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(photoWallApp, browserSupport);

  return store;
};

export default initStore;
