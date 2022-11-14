import styles from './UsersList.module.css'

const User = (props) => {
  return (
    <li className={styles.users} onClick={props.deleteUser}>
      {props.name} ({props.age} years old) 
    </li>
  );
};

export default User;
