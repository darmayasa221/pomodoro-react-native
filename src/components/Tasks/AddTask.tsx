import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonCostum from '../UI/ButtonCostum';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {AddTaskProps} from '../../types/types';

const AddTask: FC<AddTaskProps> = ({style}) => {
  return (
    <View style={[styles.addTaskWrapper, style]}>
      <ButtonCostum style={styles.button}>
        <FontAwesomeIcon name="plus-circle" size={20} color={'white'} />
        <Text style={styles.text}>Add Task</Text>
      </ButtonCostum>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  addTaskWrapper: {
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10,
    height: 50,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 5,
    opacity: 0.5,
  },
  text: {
    color: 'white',
    fontWeight: '800',
  },
});
