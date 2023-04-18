import React, {memo, FC, useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonPrimary from '../UI/ButtonPrimary';
import {TimerProps} from '../../types/timer';
import {
  ActionType,
  TimeType,
  TimerIsActivedType,
} from '../../types/store/timer/timer';
import moment from 'moment';

const Timer: FC<TimerProps> = ({menu, onPress, isActived}) => {
  const [timerDisplay, setTimerDisplay] = useState<string>('00:00');
  const [timerIsActived, setTimerIsActived] = useState<TimerIsActivedType>({
    start: false,
    buttonText: 'START',
  });
  useEffect(() => {
    if (!timerIsActived.start) {
      const reslutString = moment({
        minute: isActived.time?.minute,
        second: isActived.time?.second,
      }).format('mm:ss');
      setTimerDisplay(() => reslutString);
    }
  }, [isActived.time, timerIsActived.start]);

  useEffect(() => {
    let intervalTimer: number = 0;
    const defaultTime: TimeType = isActived?.time as TimeType;
    let minute: number = isActived.time?.minute as number;
    let second: number = isActived.time?.second as number;
    const timerToCount = moment.duration().add({
      minutes: isActived.time?.minute,
      seconds: isActived.time?.second,
    });

    if (timerIsActived.start) {
      intervalTimer = setInterval(() => {
        if (timerToCount <= 0) {
          clearInterval(intervalTimer);
        } else {
          const resultTime = timerToCount.subtract(1, 's');
          minute = resultTime.minutes();
          second = resultTime.seconds();
          const reslutString = moment({minute, second}).format('mm:ss');
          setTimerDisplay(() => reslutString);
          onPress({
            type: 'START_TIMER',
            payload: {
              name: isActived.name,
              time: {
                minute: minute,
                second: second,
              },
            },
          });
        }
      }, 1000);
    }
    if (minute === 0 && second === 0) {
      onPress({
        type: 'START_TIMER',
        payload: {
          name: isActived.name,
          time: defaultTime,
        },
      });
    }
    return () => {
      clearInterval(intervalTimer);
    };
  }, [timerIsActived, isActived.time, isActived.name, onPress]);

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
            text={name as string}
            onPress={() => {
              onPress({type: type as ActionType});
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
