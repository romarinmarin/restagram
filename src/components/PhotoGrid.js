import React from "react";
import Photo from "./Photo";

const PhotoGrid = props => {
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => {
        return <Photo {...props} post={post} key={i} i={i} />;
      })}
    </div>
  );
};

export default PhotoGrid;
