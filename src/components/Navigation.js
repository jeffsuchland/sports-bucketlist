import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home,
  Person,
  Settings,
  SportsScore,
  Group,
  List as ListIcon,
  Login,
  Logout
} from '@mui/icons-material';

const Navigation = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    onLogout();
    setIsMenuOpen(false);
    navigate('/');
  };

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    ...(user ? [
      { text: 'Profile', icon: <Person />, path: '/profile' },
      { text: 'My Experiences', icon: <SportsScore />, path: '/my-experiences' },
      { text: 'Settings', icon: <Settings />, path: '/settings' }
    ] : []),
    ...(user?.role === 'admin' ? [
      { text: 'User Management', icon: <Group />, path: '/admin/users' },
      { text: 'All Experiences', icon: <ListIcon />, path: '/admin/experiences' }
    ] : [])
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#2d2d2d' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sports Bucket List
          </Typography>
          {user ? (
            <Button 
              color="inherit" 
              onClick={handleLogout}
              startIcon={<Logout />}
            >
              Logout ({user.name})
            </Button>
          ) : (
            <Button 
              color="inherit" 
              component={Link}
              to="/login"
              startIcon={<Login />}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={toggleMenu}
        PaperProps={{
          sx: {
            backgroundColor: '#2d2d2d',
            color: '#ffffff',
            width: 280
          }
        }}
      >
        <List sx={{ pt: 2 }}>
          {menuItems.map((item) => (
            <React.Fragment key={item.text}>
              <ListItem 
                button 
                component={Link} 
                to={item.path}
                onClick={toggleMenu}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(61, 90, 254, 0.1)',
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#ffffff' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
              {item.text === 'Settings' && user?.role === 'admin' && (
                <Divider sx={{ my: 1, backgroundColor: '#424242' }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navigation;
