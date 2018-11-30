import React from "react";

const Single = props => {
  const { caption } = props.post;

  return (
    <div className="single-photo">
      <h2>{caption}</h2>
    </div>
  );
};

export default Single;
