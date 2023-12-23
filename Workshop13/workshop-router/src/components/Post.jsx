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
      <a href="/posts/1">
        <h3>{props.post.title}</h3>
      </a>
      <p>{props.post.body}</p>
    </div>
  );
};

export default Post;
