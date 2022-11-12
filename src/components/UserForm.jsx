import { useState } from "react";
import Card from "./Card";

const UserForm = () => {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')


  const userNameHandler = event => {
    setUserName(event.target.value)
  }

  const userAgeHandler = event => {
    setUserAge(event.target.value)
  }

  return (
    <Card>
      <div>
        <label>Name</label>
        <input value={userName} onChange={userNameHandler}></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input value={userAge} type='number' min='0' onChange={userAgeHandler}></input>
      </div>
    </Card>
  )
}

export default UserForm;