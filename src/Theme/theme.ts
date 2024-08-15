import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#34495E',
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
})
