function posts(state = [], action) {
  const i = action.index;
  console.log(state);
  switch (action.type) {
    case "INCREMENT_LIKES":
      const currentPost = { ...state[i], likes: state[i].likes + 1 };
      return [...state.slice(0, i), currentPost, ...state.slice(i + 1)];

    default:
      return state;
  }
}
export default posts;
