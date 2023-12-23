// http://localhost:3000/
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <h6>
        Go to the <Link to="/posts">Posts</Link> page.
      </h6>
    </div>
  );
};

export default HomePage;
