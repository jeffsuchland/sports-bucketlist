import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { Person, Lock } from '@mui/icons-material';
import { mockUsers } from '../utils/mockData';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing again
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = mockUsers.find(
      u => u.username === formData.username && u.password === formData.password
    );

    if (user) {
      onLogin(user);
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#2d2d2d',
            width: '100%'
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 3, color: '#fff' }}>
            Sign in
          </Typography>

          {error && (
            <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={formData.username}
              onChange={handleChange}
              InputProps={{
                startAdornment: <Person sx={{ mr: 1, color: '#666' }} />,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#424242',
                  },
                  '&:hover fieldset': {
                    borderColor: '#3d5afe',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#999',
                },
                '& .MuiInputBase-input': {
                  color: '#fff',
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                startAdornment: <Lock sx={{ mr: 1, color: '#666' }} />,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#424242',
                  },
                  '&:hover fieldset': {
                    borderColor: '#3d5afe',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#999',
                },
                '& .MuiInputBase-input': {
                  color: '#fff',
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#3d5afe',
                '&:hover': {
                  backgroundColor: '#536dfe',
                },
              }}
            >
              Sign In
            </Button>
          </Box>

          <Divider sx={{ width: '100%', my: 2, backgroundColor: '#424242' }} />
          
          <Box sx={{ width: '100%', mt: 2 }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>
              Demo Accounts
            </Typography>
            <List>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon>
                  <Person sx={{ color: '#3d5afe' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Admin Account"
                  secondary={
                    <Typography variant="body2" sx={{ color: '#999' }}>
                      Username: admin<br />
                      Password: admin123
                    </Typography>
                  }
                  primaryTypographyProps={{ sx: { color: '#fff' } }}
                />
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <ListItemIcon>
                  <Person sx={{ color: '#3d5afe' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Creator Account"
                  secondary={
                    <Typography variant="body2" sx={{ color: '#999' }}>
                      Username: creator1<br />
                      Password: creator123
                    </Typography>
                  }
                  primaryTypographyProps={{ sx: { color: '#fff' } }}
                />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
