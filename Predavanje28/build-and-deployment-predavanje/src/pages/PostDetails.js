import React from "react";
import PostDetail from "../components/PostDetail";
import { useLoaderData, useParams } from "react-router-dom";

const PostDetails = () => {
  const data = useLoaderData();
  const params = useParams();

  const postDetail = data.filter((post) => post.id === params.postId)[0];

  return (
    <div>
      <PostDetail postDetail={postDetail} />
    </div>
  );
};

export default PostDetails;

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
