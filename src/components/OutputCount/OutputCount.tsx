import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {OutputCountProps} from '../../types/outpoutCount';

const OutputCount: FC<OutputCountProps> = ({isSelected, name}) => {
  console.log('OUTPUT COMPONENT');
  return (
    <View style={styles.outputCountWrapper}>
      <Text style={styles.textCount}>#0</Text>
      <Text style={styles.textTitle}>
        {isSelected ? `${name}` : 'Time To focus'}
      </Text>
    </View>
  );
};

export default memo(OutputCount);

const styles = StyleSheet.create({
  outputCountWrapper: {
    marginTop: 10,
    alignItems: 'center',
    rowGap: 5,
  },
  textCount: {
    opacity: 0.5,
  },
  textTitle: {
    fontSize: 15,
    color: 'white',
  },
});
