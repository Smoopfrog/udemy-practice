import React, { useState } from 'react';
import UserForm from './components/UserForm';
import Users from './components/Users';


function App() {
  const [users, setUsers] = useState([])

  const addNewUser = userObj => {
    setUsers(prev => [ userObj, ...prev])
  }

  return (
    <div>
      <UserForm addNewUser={addNewUser} />
      {users.length > 0 && <Users usersArray={users}/>}
    </div>
  );
}

export default App;
