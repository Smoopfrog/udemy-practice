import { useState } from "react";
import Card from "./Card";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const newUserHandler = (event) => {
    event.preventDefault();
    const newUser = {
      name: userName,
      age: userAge,
    };

    console.log("newUser", newUser);
    setUserName("");
    setUserAge("");
  };
  
  return (
    <Card>
      <form onSubmit={newUserHandler}>
        <div>
          <label>Name</label>
          <input value={userName} onChange={userNameHandler}></input>
        </div>
        <div>
          <label>Age (Years)</label>
          <input
            value={userAge}
            type="number"
            min="0"
            onChange={userAgeHandler}
          ></input>
        </div>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default UserForm;
