import Card from "../UI/Card";
import User from "./User";
import styles from './UsersList.module.css'

const Users = (props) => {
  const userComponents = props.usersArray.map((user) => (
    <User
      key={Math.random().toString()}
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
