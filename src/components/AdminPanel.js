import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch users from backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users'); // Replace with your backend URL
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleViewClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleSaveChanges = () => {
    console.log('Changes saved:', selectedUser);
    handleCloseModal();
  };

  const handleChange = (e) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="admin-container">      
      <div className="admin-sidebar">
      <div className="brand-logo"></div>
        <ul>
          <li>User List</li>
          <li>Transaction List</li>
          <li>Video Management</li>
          <li>LogOut</li>

        </ul>
        
      </div>

      <div className="admin-content">
        <div className="header">
          <h1>Dashboard</h1>
          <p>01 - 25 March, 2020</p>
        </div>

          <h2>User List</h2>
          <input type="text" placeholder="Search..." className="search-bar" />

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone || 'N/A'}</td> {/* Adjust for phone field if not in the backend */}
                    <td>{user.status || 'Active'}</td>
                    <td>
                      <button onClick={() => handleViewClick(user)}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Edit User</h2>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={selectedUser?.name || ''}
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={selectedUser?.email || ''}
                onChange={handleChange}
              />
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={selectedUser?.phone || ''}
                onChange={handleChange}
              />
              <div>
                <button onClick={handleSaveChanges}>Save</button>
                <button onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
