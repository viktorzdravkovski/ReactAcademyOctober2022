import React, { useEffect, useState } from "react";

// Add tests
const Async = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        const newUsers = response.map((user) => {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
          };
        });

        setUsers(newUsers);
      });
  }, []);

  return (
    <div className="users">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
