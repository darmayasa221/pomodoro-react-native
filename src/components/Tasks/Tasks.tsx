import React, {FC, memo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Task from './Task';
import TasksHeader from './TasksHeader';
import {TasksProps} from '../../types/tasks';

const Tasks: FC<TasksProps> = ({tasks, color, onCheck}) => {
  console.log('TASKS COMPONENT');
  return (
    <View>
      <TasksHeader />
      <ScrollView style={styles.taskListContainer}>
        <View style={styles.taskListWrapper}>
          {tasks.data.map((task, index) => (
            <Task
              key={task.name}
              task={task}
              color={color}
              onCheck={onCheck}
              taskIndex={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(Tasks);

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
