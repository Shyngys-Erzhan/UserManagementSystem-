import React, { useState } from 'react';
import { Input, Button, Modal, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import style from './SearchBar.module.css';

function SearchBar({ onAddUser }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    permissions: ''
  });


  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const handleSave = () => {
    const userDataWithArrayPermissions = {
      ...newUserData,
      permissions: newUserData.permissions.split(',').map(item => item.trim())
    };
    onAddUser(userDataWithArrayPermissions);
    setIsModalVisible(false);
    setNewUserData({ name: '', email: '', permissions: '' });
  };


  const handleChange = (e) => {
    setNewUserData({ ...newUserData, [e.target.name]: e.target.value });
  };


  return (
    <div className={style.content}>
      <p>Команда</p>
      <Input
        placeholder="Поиск по Email"
        suffix={<SearchOutlined />}
        className={style.input}
      />
      <Button
        type="primary"
        className={style.button}
        onClick={showModal}>Добавить пользователя</Button>
      <Modal
        title="Добавить нового пользователя"
        visible={isModalVisible}
        onOk={handleSave}
        onCancel={handleCancel}
        okText="Добавить"
        cancelText="Отмена"
      >
        <Form>
          <Form.Item label="Имя">
            <Input name="name" value={newUserData.name} onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Email">
            <Input name="email" value={newUserData.email} onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Permissions">
            <Input name="permissions" value={newUserData.permissions} onChange={handleChange} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default SearchBar;