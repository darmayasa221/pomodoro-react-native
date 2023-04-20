import React, {FC, memo, useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import CheckBox from '../UI/CheckBox';
import ButtonCostum from '../UI/ButtonCostum';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {TaskProps} from '../../types/tasks';

const Task: FC<TaskProps> = ({
  task: {activedTask, name},
  color,
  onCheck,
  taskIndex,
  isSelected,
}) => {
  const checkBoxHandler = useCallback(() => {
    onCheck({type: 'ACTIVED_TASK', payload: {index: taskIndex}});
  }, [onCheck, taskIndex]);
  const selectTaskHandler = () => {
    onCheck({type: 'SELECT_TASK', payload: {activedTask, name}});
  };
  return (
    <Pressable onPress={selectTaskHandler}>
      <View style={[styles.taskWrapper, isSelected && styles.taskIsSelected]}>
        <View style={styles.leftSide}>
          <CheckBox
            isChecked={activedTask}
            color={color}
            onPress={checkBoxHandler}
          />
          <Text
            style={[
              styles.left_description,
              !activedTask && styles.taskIsNonActived,
            ]}>
            {name}
          </Text>
        </View>
        <View style={styles.rightSide}>
          <View style={styles.rightSide_rightWrapper}>
            <Text style={styles.right_result}>0</Text>
            <Text style={styles.right_target}> / 0</Text>
          </View>
          <ButtonCostum style={styles.button}>
            <EntypoIcon name="dots-three-vertical" size={20} color={'grey'} />
          </ButtonCostum>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(Task);

const styles = StyleSheet.create({
  taskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  taskIsSelected: {
    borderLeftColor: 'black',
    borderLeftWidth: 10,
  },
  leftSide: {
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
  },
  left_description: {
    fontWeight: '800',
    fontSize: 14,
    color: 'rgb(85, 85, 85)',
  },

  // right side style
  rightSide: {
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
  },
  rightSide_rightWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_result: {
    fontSize: 16,
    fontWeight: '800',
    color: 'grey',
  },
  right_target: {
    fontSize: 12,
    fontWeight: '800',
    color: 'grey',
  },
  // end right side
  button: {
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  taskIsNonActived: {
    textDecorationLine: 'line-through',
  },
});
