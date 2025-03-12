import React, { useState } from 'react';
import { mockUsers } from '../utils/mockData';

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers);
  const [newUser, setNewUser] = useState({ username: '', password: '', role: 'creator' });

  const handleAddUser = (e) => {
    e.preventDefault();
    const user = {
      ...newUser,
      id: users.length + 1
    };
    setUsers([...users, user]);
    setNewUser({ username: '', password: '', role: 'creator' });
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  return (
    <div className="admin-container">
      <h2>User Management</h2>
      
      <div className="admin-section">
        <h3>Add New User</h3>
        <form onSubmit={handleAddUser} className="admin-form">
          <div className="form-section">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              required
            />
          </div>
          
          <div className="form-section">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              required
            />
          </div>
          
          <div className="form-section">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="creator">Creator</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <button type="submit" className="save-button">Add User</button>
        </form>
      </div>

      <div className="admin-section">
        <h3>User List</h3>
        <div className="user-list">
          {users.map(user => (
            <div key={user.username} className="user-item">
              <div className="user-info">
                <span className="username">{user.username}</span>
                <span className="role-badge" data-role={user.role}>
                  {user.role}
                </span>
              </div>
              <div className="user-actions">
                <button className="edit-button">Edit</button>
                <button 
                  className="delete-button"
                  onClick={() => handleDeleteUser(user.username)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
