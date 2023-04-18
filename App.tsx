import React from 'react';
import MainScreen from './src/screens/MainScreen';
import MenuContextProvider from './src/store/Timer';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const App = () => {
  console.log('app');
  return (
    <MenuContextProvider>
      <MainScreen />
    </MenuContextProvider>
  );
};

export default App;
