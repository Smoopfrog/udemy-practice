import Card from "../UI/Card";
import User from "./User";
import styles from './UsersList.module.css'

const Users = (props) => {
  const userComponents = props.usersArray.map((user, index) => (
    <User
      key={index}
      name={user.name}
      age={user.age}
      deleteUser={props.deleteUser}
    />
  ));

  return (
    <Card className={styles.users}>
      <ul>{userComponents}</ul>
    </Card>
  );
};

export default Users;
