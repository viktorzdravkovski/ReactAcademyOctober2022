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
      <h3>Home</h3>
      <h3>Posts</h3>
      <h3>Contact</h3>
    </div>
  );
};

export default Navbar;
