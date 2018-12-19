function comments(state = [], action) {
  return {
    ...state,
    [action.postId]: postComment(state[action.postId], action)
  };
  // switch (action.type) {
  //     const partialState = { ...state };
  //     const newPostComment = state[action.postId];
  //     state[action.postId].push({ user: action.author, text: action.message });
  //     partialState[action.postId] = newPostComment;
  //     return partialState;
  //   case "DELETE_COMMENT":
  //     const indexDeleteComment = state[action.postId].findIndex(
  //       e => e.text === action.message
  //     );
  //     const tempState = {
  //       ...state[action.postId].slice(0, indexDeleteComment),
  //       ...state[action.postId].slice(indexDeleteComment + 1)
  //     };
  //     console.log(tempState);
  //     return tempState;

  //   default:
  //     return state;
  // }
}

function postComment(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      console.log(state);
      return [...state, { text: action.message, user: action.author }];
    case "DELETE_COMMENT":
      console.log(action.i);
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
}

export default comments;
