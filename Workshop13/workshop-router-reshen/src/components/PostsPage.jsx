import Post from "./Post";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

// http://localhost:3000/posts
const PostsPage = () => {
  const posts = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostsPage;

export const loader = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};
