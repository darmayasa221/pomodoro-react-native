import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonPrimary from '../UI/ButtonPrimary';

type TimerProps = {
  timerHeader: string;
};
const Timer: FC<TimerProps> = () => {
  return (
    <View style={styles.timerContainer}>
      <View style={styles.timerHeader}>
        <ButtonPrimary style={styles.buttonHeader} text="Pomodoro" />
        <ButtonPrimary text="Short Break" />
        <ButtonPrimary text="Long Break" />
      </View>
      <Text style={styles.textTimer}>00:00</Text>
      <View style={styles.timerFooter}>
        <ButtonPrimary style={styles.buttonStart} text="START" />
      </View>
    </View>
  );
};

export default memo(Timer);

const styles = StyleSheet.create({
  timerContainer: {
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 25,
    marginTop: 10,
    borderRadius: 5,
    rowGap: 20,
  },
  timerHeader: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTimer: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
  },
  buttonHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    padding: 5,
  },
  timerFooter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStart: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 100,
    height: 30,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 1,
  },
});
