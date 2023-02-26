import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, sans-serif',
  },
  palette: {
    primary: {
      main: '#ffc10e',
    },
    secondary: {
      light: '#f2f2f2',
      main: '#6c6c6c',
    },
    success: {
      light: '#A0BE3A',
      main: '#7da83f',
    },
  },
});

export default theme;
