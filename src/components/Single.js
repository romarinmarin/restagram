import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = props => {
  const { code } = props.match.params;
  const postIndex = props.posts.findIndex(post => post.code === code);

  const post = props.posts[postIndex];
  const comments = props.comments[code] || [];

  return (
    <div className="single-photo">
      <Photo {...props} post={post} i={postIndex} />
      <Comments comments={comments} />
    </div>
  );
};

export default Single;
