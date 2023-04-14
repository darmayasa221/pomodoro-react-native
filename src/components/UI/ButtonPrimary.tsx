import React, {FC, PropsWithChildren, memo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type ButtonProps = PropsWithChildren<{
  text: string;
  onPress?: () => void;
  style?: {};
}>;

const ButtonPrimary: FC<ButtonProps> = ({text, onPress, style}) => {
  console.log('button prm');
  return (
    <Pressable onPress={onPress}>
      <View style={{...style, ...styles.buttonContainer}}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default memo(ButtonPrimary);

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 28,
    textAlign: 'center',
  },
});
