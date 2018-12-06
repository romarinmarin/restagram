function comments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      const partialState = { ...state };
      const newPostComment = state[action.postId];
      state[action.postId].push({ user: action.author, text: action.message });
      partialState[action.postId] = newPostComment;
      return partialState;
    case "DELETE_COMMENT":
      return state;
    default:
      return state;
  }
}

export default comments;
