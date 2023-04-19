import React, {useEffect} from 'react';
import MainScreen from './src/screens/MainScreen';
import TimerContextProvider from './src/store/Timer';
import notifee from '@notifee/react-native';
import TaskContextProvider from './src/store/Task';
const App = () => {
  useEffect(() => {
    (async () => {
      // get permission notification on ios
      await notifee.requestPermission();
      // end
    })();
  });
  console.log('app');
  return (
    <TimerContextProvider>
      <TaskContextProvider>
        <MainScreen />
      </TaskContextProvider>
    </TimerContextProvider>
  );
};

export default App;
