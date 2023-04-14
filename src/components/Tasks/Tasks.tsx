import React, {FC} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import Task from './Task';
import ButtonPrimary from '../UI/ButtonPrimary';

type TasksProps = {
  style: {};
};

const Tasks: FC<TasksProps> = ({style}) => {
  console.log('tasks component');
  return (
    <View>
      <View style={styles.tasksHeader}>
        <TextInput
          style={styles.tasksTextInput}
          placeholder="what are you working on?"
        />
        <ButtonPrimary style={style} text="+" />
      </View>
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
  tasksTextInput: {
    paddingHorizontal: 5,
  },
  taskList: {
    paddingTop: 2,
    rowGap: 5,
  },
});
