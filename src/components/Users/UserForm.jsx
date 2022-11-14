import { useState } from "react";
import Card from "../UI/Card";

const UserForm = (props) => {
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

    props.addNewUser(newUser);

    setUserName("");
    setUserAge("");
  };

  return (
    <Card>
      <form onSubmit={newUserHandler}>
        <div>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
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
