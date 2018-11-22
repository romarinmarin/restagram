export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index: index
  };
}

export const addComment = (postId, message, author) => {
  return {
    type: "ADD_COMMENT",
    postId,
    message,
    author
  };
};

export function deleteComment(postId, message, author) {
  return {
    type: "DELETE_COMMENT",
    postId,
    message,
    author
  };
}
