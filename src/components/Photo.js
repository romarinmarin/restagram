import React from "react";
import { Link } from "react-router-dom";
import Single from "./Single";
import comments from "../data/comments";

const Photo = props => {
  const { id, code, caption, display_src, likes } = props.post;

  console.log(comments);
  let thumbStyle = {
    backgroundImage: `url(${display_src})`,
    height: "400px",
    width: "400px"
  };
  return (

<figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={`/view/${code}`}>
        <img src={display_src} alt={caption} className="grid-photo" />
      </Link>
        <span key={likes} className="likes-heart">{likes}</span>
    </div>

    <figcaption>
      <p>{caption}</p>
      <div className="control-buttons">
        <button className="likes"> {likes}</button>
        <Link className="button" to={`/view/${code}`}>
          <span className="comment-count">
            <span className="speech-bubble"></span>
            {comments[code] ? comments[code].length : 0 }
          </span>
        </Link>
      </div>
    </figcaption>

  </figure>

  );
};

export default Photo;
