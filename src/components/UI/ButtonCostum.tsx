import React, {FC, memo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {ButtonCostumProps} from '../../types/ui';

const ButtonCostum: FC<ButtonCostumProps> = ({children, style, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.buttonCostum, style]}>{children}</View>
    </Pressable>
  );
};

export default memo(ButtonCostum);

const styles = StyleSheet.create({
  buttonCostum: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});
