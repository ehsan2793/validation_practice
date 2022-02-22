import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const addNewUser = (input) => {
    const newUser = {
      id: Math.random() * 1000,
      name: input.username,
      age: input.age,
    };
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };
  return (
    <Fragment>
      <AddUser addNewUser={addNewUser} />
      <UsersList users={users} />
    </Fragment>
  );
}

export default App;
