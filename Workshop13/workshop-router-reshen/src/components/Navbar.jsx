import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        color: "blue",
        borderBottom: "1px solid blue",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: "blue",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        <h3>Home</h3>
      </NavLink>
      <NavLink
        to="/posts"
        style={({ isActive }) => ({
          color: "blue",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        <h3>Posts</h3>
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: "blue",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        <h3>Contact</h3>
      </NavLink>
    </div>
  );
};

export default Navbar;
