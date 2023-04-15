import React, {FC, memo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

type CheckBoxProps = {
  onPress: () => void;
  isChecked: boolean;
};

const CheckBox: FC<CheckBoxProps> = ({onPress, isChecked}) => {
  console.log('check box');
  return (
    <Pressable onPress={onPress}>
      <View style={styles.checkBox}>
        <FontAwesomeIcon name="check-circle" color={'grey'} size={30} />
      </View>
    </Pressable>
  );
};

export default memo(CheckBox);

const styles = StyleSheet.create({
  checkBox: {},
});
