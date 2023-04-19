import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Task from './Task';
import TasksHeader from './TasksHeader';
import {TasksProps} from '../../types/tasks';

const Tasks: FC<TasksProps> = ({tasks}) => {
  console.log('tasks component');
  return (
    <View>
      <TasksHeader />
      <ScrollView style={styles.taskListContainer}>
        <View style={styles.taskListWrapper}>
          {tasks.map(({activedTask, name}) => (
            <Task key={name} activedTask={activedTask} name={name} />
          ))}
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
