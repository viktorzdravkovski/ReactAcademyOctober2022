import { Link, useLoaderData } from "react-router-dom";

// http://localhost:3000/posts/1
const PostDetail = () => {
  const post = useLoaderData();

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
        Back to <Link to="..">Posts</Link>.
      </h6>
    </div>
  );
};

export default PostDetail;

export const loader = ({ params }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
};
