import React, {FC, memo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {CheckBoxProps} from '../../types/ui';

const CheckBox: FC<CheckBoxProps> = ({onPress, isChecked, color}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.checkBox}>
        <FontAwesomeIcon
          name="check-circle"
          color={!isChecked ? color : 'grey'}
          size={30}
        />
      </View>
    </Pressable>
  );
};

export default memo(CheckBox);

const styles = StyleSheet.create({
  checkBox: {},
});
