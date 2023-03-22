import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './HomePage';

const theme = createTheme({
  palette: {
    primary: {
      main: "#6FD1D5", 
      light: "#E5F2F0",
      dark: "#5D9497"
    },
    secondary: {
      main: "#02182B"
    },
    error: {
      main: "#DB504A"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <HomePage></HomePage>
      </div>
    </ThemeProvider>
  );
}

export default App;
