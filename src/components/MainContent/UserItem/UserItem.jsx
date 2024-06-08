import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import style from "./UserItem.module.css";
import buttonImage from "../../../assets/images/button.svg";
import EditUserForm from '../EditUserForm/EditUserForm';


function UserItem({ user, permissions, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userData] = useState({ ...user });


  const hasPermissions = Array.isArray(permissions) && permissions.length > 0;


  const handleUpdate = (updatedData) => {
    onUpdate({ ...userData, ...updatedData });
    setIsEditing(false);
  };


  const menu = (
    <Menu>
      <Menu.Item key="edit" onClick={() => setIsEditing(true)}>
        Редактировать
      </Menu.Item>
      <Menu.Item key="delete" onClick={() => onDelete(user.id)}>
        Удалить
      </Menu.Item>
    </Menu>
  );


  return (
    <div className={style.UserItemContent}>
      <div className={style.UserItemContainer}>
        <img src={user.image} alt={user.name} style={{ width: "64px", height: "64px", borderRadius: "50%" }} />
        <div className={style.card}>
          <div className={style.inf}>
            <h3 className={style.name}>{user.name}</h3>
            <p className={style.email}>{user.email}</p>
          </div>
          <div className={style.permissions}>
            {hasPermissions ? permissions.map((permission, index) => (
              <span key={index} className={style.permissionItem}>{permission}</span>
            )) : <span className={style.permissionItem}>Нет доступных разрешений</span>}
          </div>
        </div>
      </div>
      <Dropdown
        overlay={menu}
        trigger={['click']}>
        <button className={style.button}>
          <img src={buttonImage} alt='button' />
        </button>
      </Dropdown>
      {isEditing && (
        <EditUserForm
          user={userData}
          visible={isEditing}
          onSave={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default UserItem;
