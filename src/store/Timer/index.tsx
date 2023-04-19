import React, {FC, useMemo, useReducer} from 'react';
import TimerContext from './context';
import timerReducer from './reducer';
import {
  TimerContextType,
  TimerContextProviderType,
  TimerInitialStateType,
} from '../../types/store/timer/timer';

const timerInitialState: TimerInitialStateType = {
  data: [
    {
      name: 'pomodoro',
      activeMenu: true,
      color: 'rgb(186, 73, 73)',
      type: 'POMODORO',
      time: {
        minute: 15,
        second: 0,
      },
      defaultTime: {
        minute: 15,
        second: 0,
      },
    },
    {
      name: 'shortBreak',
      activeMenu: false,
      color: 'rgb(56, 133, 138)',
      type: 'SHORT_BREAK',
      time: {
        minute: 0,
        second: 15,
      },
      defaultTime: {
        minute: 15,
        second: 0,
      },
    },
    {
      name: 'longBreak',
      activeMenu: false,
      color: 'rgb(57, 112, 151)',
      type: 'LONG_BREAK',
      time: {
        minute: 10,
        second: 0,
      },
      defaultTime: {
        minute: 15,
        second: 0,
      },
    },
  ],
};

const TimerContextProvider: FC<TimerContextProviderType> = ({children}) => {
  const [state, dispatch] = useReducer(timerReducer, timerInitialState);
  const stateMemo: TimerContextType = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );
  return (
    <TimerContext.Provider value={stateMemo}>{children}</TimerContext.Provider>
  );
};

export default TimerContextProvider;
