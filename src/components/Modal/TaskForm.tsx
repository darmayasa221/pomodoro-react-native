import React, {FC, memo, useCallback, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ButtonCostum from '../UI/ButtonCostum';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {TaskFormProps} from '../../types/modal';

const TaskForm: FC<TaskFormProps> = ({color, onSave, modalOff}) => {
  const [inputText, setInputText] = useState<string>('');
  const onChange = (text: string) => {
    setInputText(() => text);
  };
  const saveHandler = useCallback(() => {
    onSave();
    modalOff();
  }, [onSave, modalOff]);
  return (
    <View
      style={{
        ...styles.TaskFormContainer,
        backgroundColor: color,
      }}>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        placeholder="what are you working on?"
        placeholderTextColor={'#adadad'}
        maxLength={30}
      />
      <ButtonCostum onPress={saveHandler} style={styles.button}>
        <FontAwesomeIcon name="plus-circle" size={20} color={'white'} />
        <Text style={styles.text}>Save Task</Text>
      </ButtonCostum>
    </View>
  );
};

export default memo(TaskForm);

const styles = StyleSheet.create({
  TaskFormContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    rowGap: 15,
    paddingHorizontal: 15,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    textAlign: 'center',
    paddingBottom: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    height: 50,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 5,
    opacity: 0.5,
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontWeight: '800',
  },
});
