import Card from "./UI/Card";
import User from "./User";

const Users = (props) => {
  const userComponents = props.usersArray.map((user, index) => (
    <User key={index} name={user.name} age={user.age} deleteUser={props.deleteUser} />
  ));

  return <Card>{userComponents}</Card>;
};

export default Users;
