import React, {FC, PropsWithChildren, memo} from 'react';
import {StyleSheet, View} from 'react-native';

type CardProps = PropsWithChildren<{
  style?: {};
}>;

const Card: FC<CardProps> = ({children, style}) => {
  console.log('card ui');
  return (
    <View
      style={{
        ...styles.card,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});
