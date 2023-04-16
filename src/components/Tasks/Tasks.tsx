import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Task from './Task';
import TasksHeader from './TasksHeader';

type TasksProps = {
  style: {};
};

const Tasks: FC<TasksProps> = ({style}) => {
  console.log('tasks component');
  return (
    <View>
      <TasksHeader />
      <ScrollView style={styles.taskListContainer}>
        <View style={styles.taskListWrapper}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </View>
      </ScrollView>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  tasksContainer: {},
  tasksHeader: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  taskListContainer: {
    maxHeight: '63%',
    height: '63%',
  },
  taskListWrapper: {
    paddingTop: 10,
    rowGap: 5,
    marginHorizontal: 10,
  },
});
