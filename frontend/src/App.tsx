import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './Routes';
import GlobalStyle from './styles/Global';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
