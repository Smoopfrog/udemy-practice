const User = (props) => {
  return (
    <div onClick={props.deleteUser}>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </div>
  );
};

export default User;
