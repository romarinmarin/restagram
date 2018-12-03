import React from "react";
import Photo from "./Photo";

const Single = props => {
  const { postId } = props.match.params;
  const postIndex = props.posts.findIndex(post => post.id === postId);
  const post = props.posts[postIndex];

  return <Photo {...props} post={post} i={postIndex} />;
};

export default Single;
