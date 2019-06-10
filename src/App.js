import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MainRouter from './MainRouter.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2979ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainRouter/>
    </ThemeProvider>
  );
}

export default App;
