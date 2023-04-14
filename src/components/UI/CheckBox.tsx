import React, {FC, memo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

type CheckBoxProps = {
  onPress: () => void;
  isChecked: boolean;
};

const CheckBox: FC<CheckBoxProps> = ({onPress, isChecked}) => {
  console.log('check box');
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          ...styles.checkBox,
          backgroundColor: isChecked ? 'green' : 'white',
        }}
      />
    </Pressable>
  );
};

export default memo(CheckBox);

const styles = StyleSheet.create({
  checkBox: {
    borderColor: 'black',
    borderWidth: 2,
    width: 25,
    height: 25,
    borderRadius: 100,
  },
});
