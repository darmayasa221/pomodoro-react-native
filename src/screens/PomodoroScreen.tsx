import React from 'react';
import {StyleSheet, View} from 'react-native';
import Timer from '../components/Timer/Timer';
import Card from '../components/UI/Card';
import Tasks from '../components/Tasks/Tasks';

const PomodoroScreen = () => {
  console.log('pomodoro screen');
  return (
    <View style={styles.pomodoroContainer}>
      <Timer timerHeader="POMODORO" />
      <Card style={styles.card}>
        <Tasks style={styles.tasksButton} />
      </Card>
    </View>
  );
};

export default PomodoroScreen;

const styles = StyleSheet.create({
  pomodoroContainer: {
    backgroundColor: 'gray',
    flex: 1,
    rowGap: 10,
  },
  card: {
    paddingBottom: 2,
  },
  tasksButton: {
    backgroundColor: '#d44949',
    paddingHorizontal: 10,
  },
});
