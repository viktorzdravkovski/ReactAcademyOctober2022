import React from "react";
import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";

const Posts = () => {
  const data = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1>The Posts Page</h1>
      {data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;

export const loader = () => {
  return [
    {
      id: "1",
      title: "Test1",
      content: "Test content1",
    },
    {
      id: "2",
      title: "Test2",
      content: "Test content2",
    },
    {
      id: "3",
      title: "Test3",
      content: "Test content3",
    },
  ];
};
