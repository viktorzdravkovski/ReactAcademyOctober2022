import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <p>
        {/*Go to the <a href="/events">Events</a>*/}
        Go to the <Link to="/events">Events</Link>
      </p>
    </>
  );
};

export default HomePage;
