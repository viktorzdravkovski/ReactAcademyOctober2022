import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        alignItems: "center",
        width: "80%",
        padding: "10px",
      }}
    >
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <Link to={props.post.id}>Details</Link>
    </div>
  );
};

export default Post;
