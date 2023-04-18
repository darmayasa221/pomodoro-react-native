import React, {memo, FC, useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonPrimary from '../UI/ButtonPrimary';
import {TimerProps} from '../../types/timer';
import countDownTimer from '../../utils/counDownTimer';

const Timer: FC<TimerProps> = ({menu, onPress, isActived}) => {
  const [timerValue, setTimerValue] = useState<{
    minute: number;
    second: number;
  }>(isActived.time);
  const [timerDisplay, setTimerDisplay] = useState<string>('00:00');
  const [timerIsActived, setTimerIsActived] = useState<{
    start: boolean;
    buttonText: string;
  }>({
    start: false,
    buttonText: 'START',
  });
  useEffect(() => {
    setTimerValue(prev => ({...prev, ...isActived.time}));
  }, [isActived]);
  useEffect(() => {
    let intervalTimer: number = 0;
    if (timerIsActived.start) {
      intervalTimer = setInterval(() => {
        console.log('interval');
        if (timerValue.second >= 1) {
          setTimerValue(prev => ({...prev, second: prev.second - 1}));
        }
        if (timerValue.second === 0) {
          if (timerValue.minute >= 1) {
            setTimerValue(prev => ({
              ...prev,
              minute: prev.minute - 1,
              second: 60,
            }));
          }
        }
        clearInterval(intervalTimer);
      }, 1000);
    }
    if (timerValue.minute === 0 && timerValue.second === 0) {
      setTimerIsActived(prev => ({
        ...prev,
        buttonText: 'START',
        start: false,
      }));
      setTimerValue(prev => ({...prev, minute: 0, second: 10}));
    }
    setTimerDisplay(() => countDownTimer(timerValue));
    return () => {
      clearInterval(intervalTimer);
    };
  }, [timerIsActived, timerValue]);

  const timerHandle = () => {
    setTimerIsActived(prev => ({
      ...prev,
      buttonText: !prev.start ? 'STOP' : 'START',
      start: !prev.start,
    }));
  };
  return (
    <View style={styles.timerContainer}>
      <View style={styles.timerHeader}>
        {menu.map(({activeMenu, name, type}) => (
          <ButtonPrimary
            key={type}
            styleView={activeMenu && styles.buttonHeader}
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
            color: isActived.color,
          }}
          text={timerIsActived.buttonText}
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
