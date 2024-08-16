import { Fab, createTheme, styled } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#34495E',
      light: '#edf7fc',
    },
    secondary: {
      main: '#3D546B',
    },
    error: {
      main: '#990f3d',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.2rem',
      paddingTop: '0.5rem',
    },
  },
});

export const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: '-1.75rem',
  display: 'flex',
  left: 0,
  right: 0,
  margin: '0 auto',
  border: '1px solid',
});
