import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './src/components/Header/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header />
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        Login with Facebook
      </Icon.Button>
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
