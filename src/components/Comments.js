import React from "react";

const Comments = props => {
  const renderComment = (c, i) => {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{c.user}</strong>
          {c.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  };
  return <div>{props.comments.map(renderComment)}</div>;
};

export default Comments;
