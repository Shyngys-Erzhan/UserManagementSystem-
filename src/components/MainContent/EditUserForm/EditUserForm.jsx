import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';


function EditUserForm({ user, visible, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    permissions: ''
  });


  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        permissions: user.permissions.join(', ')
      });
    }
  }, [user]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = () => {
    const updatedData = {
      ...formData,
      permissions: formData.permissions.split(',').map(permission => permission.trim())
    };
    onSave(updatedData);
  };


  return (
    <Modal
      title="Редактировать пользователя"
      visible={visible}
      onOk={handleSubmit}
      onCancel={onCancel}
      footer={[
        <Button
          key="back"
          onClick={onCancel}>Отмена</Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleSubmit}>
          Сохранить
        </Button>,
      ]}
    >
      <Form>
        <Form.Item label="Имя">
          <Input name="name" value={formData.name} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" value={formData.email} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Permissions">
          <Input name="permissions" value={formData.permissions} onChange={handleChange} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditUserForm;