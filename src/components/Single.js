import React from "react";

const Single = props => {
  const { postId } = props.match.params;
  const postIndex = props.posts.findIndex(post => post.id == postId);
  const post = props.posts[postIndex];

  return (
    <div className="single-photo">
      <h2>{post.caption}</h2>
    </div>
  );
};

export default Single;
