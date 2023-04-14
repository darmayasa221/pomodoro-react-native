import React from 'react';
import {StyleSheet, View} from 'react-native';
import Timer from '../components/Timer/Timer';
import Card from '../components/UI/Card';
import Tasks from '../components/Tasks/Tasks';

const ShortBreakScreen = () => {
  return (
    <View style={styles.shortBreakContainer}>
      <Timer timerHeader="SHORT BREAK" />
      <Card style={styles.card}>
        <Tasks style={styles.tasksButton} />
      </Card>
    </View>
  );
};

export default ShortBreakScreen;

const styles = StyleSheet.create({
  shortBreakContainer: {
    backgroundColor: 'gray',
    flex: 1,
    rowGap: 10,
  },
  card: {
    paddingBottom: 2,
  },
  tasksButton: {
    backgroundColor: '#48d4a2',
    paddingHorizontal: 10,
  },
});
