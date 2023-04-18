import React from 'react';
import MainScreen from './src/screens/MainScreen';
import TimerContextProvider from './src/store/Timer';

const App = () => {
  console.log('app');
  return (
    <TimerContextProvider>
      <MainScreen />
    </TimerContextProvider>
  );
};

export default App;
