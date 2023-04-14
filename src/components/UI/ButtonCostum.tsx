import React, {FC, memo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {ButtonCostumProps} from '../../types/types';

const ButtonCostum: FC<ButtonCostumProps> = ({children, style}) => {
  return (
    <Pressable>
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
