import React, { useState } from 'react';
import UserItem from '../UserItem/UserItem';
import SearchBar from '../SearchBar/SearchBar';
import usersData from '../../../data/users.json';
import style from "./UserList.module.css";

function UserList() {
  const [users, setUsers] = useState(usersData);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  return (
    <div className={style.mainContentContainer}>
      <SearchBar onAddUser={addUser} />
      {users.map(user => (
        <UserItem
          key={user.id}
          user={user}
          permissions={user.permissions}
          onDelete={() => deleteUser(user.id)}
          onUpdate={updateUser}
        />
      ))}
    </div>
  );
}

export default UserList;