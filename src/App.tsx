import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
