import React, { useState } from "react";
import UserForm from "./components/Users/UserForm";
import Users from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (userObj) => {
    setUsers((prev) => [userObj, ...prev]);
  };

  const deleteUser = () => {
    console.log("delete");
  };

  return (
    <div>
      <UserForm addNewUser={addNewUser} />
      {users.length > 0 && <Users usersArray={users} deleteUser={deleteUser} />}
    </div>
  );
}

export default App;
