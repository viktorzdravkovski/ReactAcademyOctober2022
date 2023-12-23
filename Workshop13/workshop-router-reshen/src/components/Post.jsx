import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "50%",
        marginBottom: "5px",
        textAlign: "center",
      }}
    >
      <Link to={`/posts/${props.post.id}`}>
        <h3>{props.post.title}</h3>
      </Link>
      <p>{props.post.body}</p>
    </div>
  );
};

export default Post;
