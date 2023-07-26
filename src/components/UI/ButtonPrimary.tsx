import React, {FC, memo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ButtonPrimaryProps} from '../../types/ui';

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  text,
  onPress,
  styleView,
  styleText,
}) => {
  console.log('BTN PRM');
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.buttonContainer, styleView]}>
        <Text style={[styles.buttonText, styleText]}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default memo(ButtonPrimary);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    padding: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
