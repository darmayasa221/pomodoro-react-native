import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OutputCount = () => {
  return (
    <View style={styles.outputCountWrapper}>
      <Text style={styles.textCount}>#0</Text>
      <Text style={styles.textTitle}>Time To focus</Text>
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
