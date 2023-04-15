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
      <ScrollView>
        <View style={styles.taskList}>
          <Task />
          {/* <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task /> */}
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
  taskList: {
    paddingTop: 10,
    rowGap: 5,
    marginHorizontal: 10,
  },
});
