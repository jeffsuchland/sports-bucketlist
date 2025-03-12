import { createTheme } from '@mui/material/styles';

export const getTheme = (isDarkMode) => createTheme({
  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: '#3d5afe',
    },
    secondary: {
      main: '#ff1744',
    },
    background: {
      default: isDarkMode ? '#1a1a1a' : '#f5f5f5',
      paper: isDarkMode ? '#2d2d2d' : '#ffffff',
    },
    text: {
      primary: isDarkMode ? '#ffffff' : '#000000',
      secondary: isDarkMode ? '#999999' : '#666666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
        },
      },
    },
  },
});
