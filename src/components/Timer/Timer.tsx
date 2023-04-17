import React, {memo, FC, useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonPrimary from '../UI/ButtonPrimary';
import {TimerProps} from '../../types/timer';
import countDownTimer from '../../utils/counDownTimer';

const Timer: FC<TimerProps> = ({menu, onPress, isActivedColor}) => {
  const [timerValue, setTimerValue] = useState<{
    minute: number;
    second: number;
  }>({
    minute: 0,
    second: 10,
  });
  const [timerDisplay, setTimerDisplay] = useState<string>('');
  const [timerIsActived, setTimerIsActived] = useState<boolean>(false);
  useEffect(() => {
    const timerCount = countDownTimer(timerValue);
    setTimerDisplay(() => timerCount);
  }, [timerValue]);

  const timerHandle = () => {
    setTimerIsActived(prev => !prev);
    const timerInter = setInterval(() => {
      if (timerIsActived) {
        if (timerValue.minute >= 0) {
          if (timerValue.second >= 1) {
            setTimerValue(prev => ({
              ...prev,
              second: prev.second - 1,
            }));
          } else {
            setTimerValue(prev => ({
              ...prev,
              second: 60,
              minute: prev.minute - 1,
            }));
          }
        }
      }
    }, 1000);
    clearInterval(timerInter);
  };
  return (
    <View style={styles.timerContainer}>
      <View style={styles.timerHeader}>
        {menu.map(({active, name, type}) => (
          <ButtonPrimary
            key={type}
            styleView={active && styles.buttonHeader}
            styleText={styles.buttonHeaderText}
            text={name}
            onPress={() => {
              onPress({type: type});
            }}
          />
        ))}
      </View>
      <Text style={styles.textTimer}>{timerDisplay}</Text>
      <View style={styles.timerFooter}>
        <ButtonPrimary
          styleView={styles.buttonStart}
          styleText={{
            ...styles.buttonStartText,
            color: isActivedColor,
          }}
          text="START"
          onPress={timerHandle}
        />
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
  // button header styling
  buttonHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  buttonHeaderText: {
    fontWeight: '800',
  },
  // end button header
  timerFooter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // button start styling
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
  buttonStartText: {
    fontWeight: '900',
  },
  // end button start
});
