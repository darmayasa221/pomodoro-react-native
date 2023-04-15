import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Header from './src/components/Header/Header';
import Timer from './src/components/Timer/Timer';
import OutputCount from './src/components/OutputCount/OutputCount';
import Tasks from './src/components/Tasks/Tasks';
import AddTask from './src/components/Tasks/AddTask';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header />
      <Timer />
      <OutputCount />
      <Tasks />
      <View style={styles.footer}>
        <AddTask style={{}} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(186, 73, 73)',
  },
  footer: {
    backgroundColor: 'rgb(186, 73, 73)',
    position: 'absolute',
    bottom: '-90%',
    width: '100%',
    height: '100%',
    paddingTop: 5,
  },
});
