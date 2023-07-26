import React, {useContext, memo, useCallback, useMemo, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Modal} from 'react-native';

import Header from '../components/Header/Header';
import Timer from '../components/Timer/Timer';
import OutputCount from '../components/OutputCount/OutputCount';
import Tasks from '../components/Tasks/Tasks';
import TaskFooter from '../components/Tasks/TaskFooter';
import TimerContext from '../store/Timer/context';
import {TimerActionType, TimerItemType} from '../types/store/timer/timer';
import SettingTimer from '../components/Modal/SettingTimer';
import {IsModalActivedType, TypeModal} from '../types/modal';
import TaskForm from '../components/Modal/TaskForm';
import TaskContext from '../store/Task/context';

const MainScreen = () => {
  console.log('MAINCREEN');
  const [isModalActived, setIsModalActived] = useState<IsModalActivedType>({
    isActived: false,
    type: '',
  });
  // get state from use context
  const {state: timerState, dispatch: timerDispatch} = useContext(TimerContext);
  const {state: taskState, dispatch: taskDispatch} = useContext(TaskContext);
  // end get state from use context
  // memoize state to ensure when component render the state will crate when state change,
  const timerMemo = useMemo(() => {
    console.log('TIMER MEMO');
    return timerState.data;
  }, [timerState]);
  const taskMemo = useMemo(() => {
    console.log('TASK MEMO');
    return taskState;
  }, [taskState]);
  const isActivedMemo = useMemo(() => {
    console.log('IS ACTIVED MEMO');
    return timerState.data.find(({activeMenu}) => activeMenu === true);
  }, [timerState]);
  const isTaskSelectedMemo = useMemo(() => {
    console.log('IS TASK SELECTEDS');
    return taskState.data.find(({isSelected}) => isSelected === true);
  }, [taskState]);
  // end memoize
  // save the function at same memory to ensure this function not recreate again when component execute for state change
  const menuHandler = useCallback(
    (action: TimerActionType) => {
      timerDispatch(action);
    },
    [timerDispatch],
  );
  const turnOnModalHandler = useCallback((type: TypeModal) => {
    setIsModalActived(prev => ({
      ...prev,
      isActived: true,
      type: type,
    }));
  }, []);
  const turnOffModalHandler = useCallback(() => {
    setIsModalActived(prev => ({
      ...prev,
      isActived: false,
      type: '',
    }));
  }, []);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isActivedMemo?.color,
      }}>
      <SafeAreaView />
      {isModalActived.isActived && (
        <Modal visible={isModalActived.isActived} animationType="slide">
          {isModalActived.type === 'TIMER' && (
            <SettingTimer
              onCount={timerDispatch}
              onSave={turnOffModalHandler}
              color={isActivedMemo?.color as string}
              data={timerMemo}
            />
          )}
          {isModalActived.type === 'TASK' && (
            <TaskForm
              color={isActivedMemo?.color as string}
              onSave={taskDispatch}
              modalOff={turnOffModalHandler}
            />
          )}
        </Modal>
      )}
      <Header settingOnPress={turnOnModalHandler} />
      <Timer
        menu={timerMemo}
        onPress={menuHandler}
        isActived={isActivedMemo as TimerItemType}
      />
      <OutputCount
        isSelected={isTaskSelectedMemo?.isSelected}
        name={isTaskSelectedMemo?.name}
      />
      <Tasks
        tasks={taskMemo}
        color={isActivedMemo?.color}
        onCheck={taskDispatch}
      />
      <View
        style={{
          ...styles.footer,
          backgroundColor: isActivedMemo?.color,
        }}>
        <TaskFooter addTaskOnPress={turnOnModalHandler} />
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
