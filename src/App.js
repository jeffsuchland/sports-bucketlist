import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import ExperienceList from './components/ExperienceList';
import ExperienceDetails from './components/ExperienceDetails';
import Profile from './components/Profile';
import Settings from './components/Settings';
import MyExperiences from './components/MyExperiences';
import UserManagement from './components/UserManagement';
import AdminExperiences from './components/AdminExperiences';
import Login from './components/Login';
import { mockUsers } from './utils/mockData';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there's a logged-in user in localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Initialize users in localStorage if not present
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(mockUsers));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  // Protected Route component
  const ProtectedRoute = ({ children, requiredRole }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    if (requiredRole && user.role !== requiredRole) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <Router>
      <div className="App">
        <Navigation user={user} onLogout={handleLogout} />
        <main className="container">
          <Routes>
            <Route 
              path="/" 
              element={<ExperienceList user={user} />} 
            />
            <Route 
              path="/experience/:id" 
              element={<ExperienceDetails user={user} />} 
            />
            <Route 
              path="/login" 
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              } 
            />
            
            {/* Protected Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-experiences"
              element={
                <ProtectedRoute>
                  <MyExperiences user={user} />
                </ProtectedRoute>
              }
            />
            
            {/* Admin Routes */}
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute requiredRole="admin">
                  <UserManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/experiences"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminExperiences />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
