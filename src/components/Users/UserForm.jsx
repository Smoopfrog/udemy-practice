import { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const newUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }

    const newUser = {
      name: enteredName,
      age: enteredUserAge,
    };

    props.addNewUser(newUser);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={newUserHandler}>
          <div>
            <label htmlFor="username">Name</label>
            <input id="username" type="text" ref={nameInputRef} />
          </div>
          <div>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" min="0" ref={ageInputRef}></input>
          </div>
          <Button onClick={newUserHandler} type={"submit"}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
