import React, { memo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import { themeLight, themeDark } from 'styles/theme';
import { AppThemeProvider, useAppTheme } from 'context/AppTheme';

import Home from 'pages/home';

const App = memo(() => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
         <Home />
    </ThemeProvider>
  );
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
  </React.StrictMode>
);
