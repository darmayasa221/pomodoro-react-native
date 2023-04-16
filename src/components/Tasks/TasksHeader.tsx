import React from 'react';
import ButtonCostum from '../UI/ButtonCostum';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {StyleSheet, Text, View} from 'react-native';

const TasksHeader = () => {
  return (
    <View style={styles.tasksHeaderWrapper}>
      <Text style={styles.textTitle}>Tasks</Text>
      <View style={styles.pomosWrapper}>
        <Text style={styles.textPomos}>pomos : </Text>
        <Text style={styles.textResult}>0 / 0</Text>
      </View>
      <ButtonCostum style={styles.button}>
        <EntypoIcon name="dots-three-vertical" size={20} color={'white'} />
      </ButtonCostum>
    </View>
  );
};

export default TasksHeader;

const styles = StyleSheet.create({
  tasksHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
  },
  textTitle: {
    color: 'white',
    fontWeight: '800',
  },
  pomosWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  textPomos: {
    color: 'white',
  },
  textResult: {
    color: 'white',
    fontWeight: '800',
  },
  button: {
    borderRadius: 5,
    padding: 5,
  },
});
