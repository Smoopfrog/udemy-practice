import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const newUserHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }

    const newUser = {
      name: userName,
      age: userAge,
    };

    props.addNewUser(newUser);

    setUserName("");
    setUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
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
          <Button onClick={newUserHandler} type={"submit"}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
