const INITIAL_STATE = {
  items: [],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, items: action.posts };
    case "REMOVE_POST":
      // console.log(action.index);
      let gg = state.items;
      return [...gg.slice(0, action.index)];
    default:
      return state;
  }
};

export default postReducer;
