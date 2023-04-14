import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PomodoroScreen from './src/screens/PomodoroScreen';
import LongBreakScreen from './src/screens/LongBreakScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShortBreakScreen from './src/screens/ShortBreakScreen';

// creating RootStackParamList for navigator
export type RootStackParamList = {
  Home: undefined;
  Pomodoro: undefined;
  ShortBreak: undefined;
  LongBreak: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  console.log('app');
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Pomodoro" component={PomodoroScreen} />
          <Stack.Screen name="ShortBreak" component={ShortBreakScreen} />
          <Stack.Screen name="LongBreak" component={LongBreakScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <PomodoroScreen /> */}
      {/* <LongBreakScreen /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
