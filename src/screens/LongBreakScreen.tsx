import React from 'react';
import {StyleSheet, View} from 'react-native';
import Timer from '../components/Timer/Timer';
import Card from '../components/UI/Card';
import Tasks from '../components/Tasks/Tasks';

const LongBreakScreen = () => {
  return (
    <View style={styles.longBreakContainer}>
      <Timer timerHeader="LONG BREAK" />
      <Card style={styles.card}>
        <Tasks style={styles.tasksButton} />
      </Card>
    </View>
  );
};

export default LongBreakScreen;

const styles = StyleSheet.create({
  longBreakContainer: {
    backgroundColor: 'gray',
    flex: 1,
    rowGap: 10,
  },
  card: {
    paddingBottom: 2,
  },
  tasksButton: {
    backgroundColor: '#48d4d3',
    paddingHorizontal: 10,
  },
});
