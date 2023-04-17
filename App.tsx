import React from 'react';
import MainScreen from './src/screens/MainScreen';
import MenuContextProvider from './src/store/menu ';

const App = () => {
  console.log('app');
  return (
    <MenuContextProvider>
      <MainScreen />
    </MenuContextProvider>
  );
};

export default App;
