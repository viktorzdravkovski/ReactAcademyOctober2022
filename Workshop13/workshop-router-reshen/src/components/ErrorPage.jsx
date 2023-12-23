import { Link } from "react-router-dom";

const ErrorPage = () => {
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
      <h1>Error</h1>
      <h3>An error has occurred!</h3>
      <h6>
        Back to <Link to="/">Home</Link>.
      </h6>
    </div>
  );
};

export default ErrorPage;
