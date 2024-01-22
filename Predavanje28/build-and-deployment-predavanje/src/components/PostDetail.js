import React from "react";
import { Link } from "react-router-dom";

const PostDetail = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>{props.postDetail.title}</h1>
      <h3>{props.postDetail.content}</h3>
      <Link to=".." relative="path">Back</Link>
    </div>
  );
};

export default PostDetail;
