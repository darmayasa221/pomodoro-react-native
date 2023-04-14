import React, {FC, memo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonPrimary from '../UI/ButtonPrimary';
import Card from '../UI/Card';

type TimerProps = {
  timerHeader: string;
};
const Timer: FC<TimerProps> = ({timerHeader}) => {
  console.log('timer component');
  const [second, setSecond] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);

  return (
    <Card style={styles.card}>
      <Text>{timerHeader}</Text>
      <View>
        <Text style={styles.textTimer}>
          {minute}:{second}
        </Text>
      </View>
      <ButtonPrimary text="START" />
    </Card>
  );
};

export default memo(Timer);

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    alignItems: 'center',
    rowGap: 10,
  },
  textTimer: {
    fontSize: 32,
  },
});
