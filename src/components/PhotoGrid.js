import React from "react";
import Single from "./Single";

const PhotoGrid = props => {
  return (
    <div className="photo-grid">
      {props.posts.map(post => {
        return (
          <li>
            <Single post={post} />
          </li>
        );
      })}
    </div>
  );
};

export default PhotoGrid;
