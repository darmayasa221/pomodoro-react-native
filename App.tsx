import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from './src/components/Header/Header';
import ButtonCostum from './src/components/UI/ButtonCostum';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header />
      <ButtonCostum style={styles.button}>
        <Icon name="user-circle" size={32} />
      </ButtonCostum>
      {/* <PomodoroScreen /> */}
      {/* <LongBreakScreen /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(186, 73, 73)',
  },
  button: {
    width: 100,
    height: 100,
    padding: 20,
  },
});
