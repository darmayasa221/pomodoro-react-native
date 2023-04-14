import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '../UI/CheckBox';

const Task = () => {
  console.log('task components');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checkBoxHandler = useCallback(() => {
    setIsChecked(prev => !prev);
  }, []);

  return (
    <View style={styles.taskWrapper}>
      <CheckBox isChecked={isChecked} onPress={checkBoxHandler} />
      <Text style={isChecked && styles.taskText}> my tasks </Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    border: 'grey',
    borderWidth: 1,
    borderRadius: 3,
  },
  taskText: {
    textDecorationLine: 'line-through',
  },
});
