import { useEffect, useState } from "react";

// http://localhost:3000/posts/1
const PostDetail = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((response) => {
        setPost(response);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Post detail</h1>
      <h3>{post.title}</h3>
      <h6>{post.body}</h6>
      <h6>
        Back to <a href="/posts">Posts</a>.
      </h6>
    </div>
  );
};

export default PostDetail;
