import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Alert,
  Snackbar
} from '@mui/material';

const Profile = ({ user }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [stats, setStats] = useState({
    experiences: 0,
    likesGiven: 0,
    comments: 0
  });

  useEffect(() => {
    if (user) {
      // Load user data
      setFormData({
        name: user.name || '',
        email: user.email || '',
        username: user.username || ''
      });

      // Load user stats from localStorage
      const savedStats = localStorage.getItem(`userStats_${user.id}`);
      if (savedStats) {
        setStats(JSON.parse(savedStats));
      }
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      // Save updated user data to localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = users.map(u => {
        if (u.id === user.id) {
          return { ...u, ...formData };
        }
        return u;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setShowSuccess(true);
    }
  };

  const statItems = [
    { label: 'Experiences', value: stats.experiences },
    { label: 'Likes Given', value: stats.likesGiven },
    { label: 'Comments', value: stats.comments }
  ];

  if (!user) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="warning">Please log in to view your profile.</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#2d2d2d' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#fff' }}>
          Profile
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
                Personal Information
              </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                disabled
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#424242' },
                    '&:hover fieldset': { borderColor: '#3d5afe' },
                  },
                  '& .MuiInputLabel-root': { color: '#999' },
                  '& .MuiInputBase-input': { 
                    color: '#fff',
                    '&.Mui-disabled': { color: '#666' }
                  }
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#424242' },
                    '&:hover fieldset': { borderColor: '#3d5afe' },
                  },
                  '& .MuiInputLabel-root': { color: '#999' },
                  '& .MuiInputBase-input': { color: '#fff' }
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#424242' },
                    '&:hover fieldset': { borderColor: '#3d5afe' },
                  },
                  '& .MuiInputLabel-root': { color: '#999' },
                  '& .MuiInputBase-input': { color: '#fff' }
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: '#fff', mb: 2, mt: 2 }}>
                Stats
              </Typography>
              <Grid container spacing={3}>
                {statItems.map((stat) => (
                  <Grid item xs={12} sm={4} key={stat.label}>
                    <Paper 
                      sx={{ 
                        p: 2, 
                        textAlign: 'center',
                        backgroundColor: '#1e1e1e',
                        color: '#fff'
                      }}
                    >
                      <Typography variant="h4" sx={{ color: '#3d5afe' }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body1">
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: '#3d5afe',
                  '&:hover': {
                    backgroundColor: '#536dfe',
                  },
                }}
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success"
          sx={{ width: '100%' }}
        >
          Profile updated successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Profile;
