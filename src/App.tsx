import React from 'react';
import { ThemeProvider } from 'styled-components';
import Login from './components/pages/Login';

import GlobalStyle from './styles/reset';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  );
}

export default App;
