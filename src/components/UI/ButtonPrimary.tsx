import React, {FC, PropsWithChildren, memo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type ButtonProps = PropsWithChildren<{
  text: string;
  onPress?: () => void;
  styleView?: {};
  styleText?: {};
}>;

const ButtonPrimary: FC<ButtonProps> = ({
  text,
  onPress,
  styleView,
  styleText,
}) => {
  console.log('button prm');
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
