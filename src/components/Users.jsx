import Card from "./Card";
import User from "./User";

const Users = (props) => {
  const userComponents = props.usersArray.map((user) => (
    <User name={user.name} age={user.age} deleteUser={props.deleteUser} />
  ));

  return <Card>{userComponents}</Card>;
};

export default Users;
