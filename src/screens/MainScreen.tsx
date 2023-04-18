import React, {useContext, memo, useCallback, useMemo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Header from '../components/Header/Header';
import Timer from '../components/Timer/Timer';
import OutputCount from '../components/OutputCount/OutputCount';
import Tasks from '../components/Tasks/Tasks';
import TaskFooter from '../components/Tasks/TaskFooter';
import TimerContext from '../store/Timer/context';
import {TimerActionType, TimerItemType} from '../types/store/timer/timer';
import checkActiveMenu from '../utils/checkActiveMenu';

const MainScreen = () => {
  const {state: timerState, dispatch: timerDispatch} = useContext(TimerContext);
  const isActivedMemo = useMemo(
    () => checkActiveMenu(timerState),
    [timerState],
  );
  const timerMemo = useMemo(() => timerState.data, [timerState]);
  const menuHandler = useCallback(
    (action: TimerActionType) => {
      timerDispatch(action);
    },
    [timerDispatch],
  );
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isActivedMemo?.color,
      }}>
      <SafeAreaView />
      <Header />
      <Timer
        menu={timerMemo}
        onPress={menuHandler}
        isActived={isActivedMemo as TimerItemType}
      />
      <OutputCount />
      <Tasks style={{}} />
      <View
        style={{
          ...styles.footer,
          backgroundColor: isActivedMemo?.color,
        }}>
        <TaskFooter style={{}} />
      </View>
    </View>
  );
};

export default memo(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: '-90%',
    width: '100%',
    height: '100%',
    paddingTop: 5,
  },
});
