import React from "react";
import Single from "./Single";
import Photo from "./Photo";

const PhotoGrid = props => {
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => {
        return <Photo post={post} key={i} />;
      })}
    </div>
  );
};

export default PhotoGrid;
