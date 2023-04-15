import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '../UI/CheckBox';
import ButtonCostum from '../UI/ButtonCostum';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Task = () => {
  console.log('task components');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checkBoxHandler = useCallback(() => {
    setIsChecked(prev => !prev);
  }, []);

  return (
    <View style={styles.taskWrapper}>
      <View style={styles.leftSide}>
        <CheckBox isChecked={isChecked} onPress={checkBoxHandler} />
        <Text style={styles.left_description}> my tasks </Text>
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
  );
};

export default Task;

const styles = StyleSheet.create({
  taskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
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
    fontWeight: 800,
    color: 'grey',
  },
  right_target: {
    fontSize: 12,
    fontWeight: 800,
    color: 'grey',
  },
  // end right side
  button: {
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.5,
  },
  // taskText: {
  //   textDecorationLine: 'line-through',
  // },
});
