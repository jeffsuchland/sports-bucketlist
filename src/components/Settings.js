import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
  Button,
  Divider,
  Box,
  Alert,
  Snackbar
} from '@mui/material';

const Settings = ({ user }) => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: true,
    publicProfile: false
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    if (user) {
      // Load user settings from localStorage
      const savedSettings = localStorage.getItem(`userSettings_${user.id}`);
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings));
      }
    }
  }, [user]);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setSettings(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (user) {
      // Save settings to localStorage
      localStorage.setItem(`userSettings_${user.id}`, JSON.stringify(settings));
      setShowSuccess(true);
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Update CSS variables
    document.documentElement.style.setProperty('--bg-color', newTheme ? '#1a1a1a' : '#f5f5f5');
    document.documentElement.style.setProperty('--text-color', newTheme ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--paper-bg', newTheme ? '#2d2d2d' : '#ffffff');
    document.documentElement.style.setProperty('--secondary-text', newTheme ? '#999999' : '#666666');
    document.documentElement.style.setProperty('--border-color', newTheme ? '#424242' : '#e0e0e0');
  };

  if (!user) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="warning" style={{ color: 'var(--text-color)' }}>Please log in to view your settings.</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: 'var(--paper-bg)' }}>
        <Typography variant="h4" component="h1" gutterBottom style={{ color: 'var(--text-color)' }}>
          Settings
        </Typography>

        <Box component="form" onSubmit={handleSave} sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ color: 'var(--text-color)', mb: 2 }}>
            Notifications
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.emailNotifications}
                  onChange={handleChange}
                  name="emailNotifications"
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#3d5afe',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#3d5afe',
                    },
                  }}
                />
              }
              label="Email Notifications"
              sx={{ color: 'var(--text-color)', mb: 1 }}
            />
          </FormGroup>

          <Divider sx={{ my: 3, backgroundColor: 'var(--border-color)' }} />

          <Typography variant="h6" sx={{ color: 'var(--text-color)', mb: 2 }}>
            Appearance
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={isDark}
                  onChange={toggleTheme}
                  color="primary"
                />
              }
              label={isDark ? "Dark Mode" : "Light Mode"}
              sx={{ color: 'var(--text-color)', mb: 1 }}
            />
          </FormGroup>

          <Divider sx={{ my: 3, backgroundColor: 'var(--border-color)' }} />

          <Typography variant="h6" sx={{ color: 'var(--text-color)', mb: 2 }}>
            Privacy
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.publicProfile}
                  onChange={handleChange}
                  name="publicProfile"
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#3d5afe',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#3d5afe',
                    },
                  }}
                />
              }
              label="Public Profile"
              sx={{ color: 'var(--text-color)', mb: 1 }}
            />
          </FormGroup>

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
          Settings updated successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Settings;
