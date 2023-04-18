import {Dispatch, PropsWithChildren} from 'react';

export type ActionType =
  | 'POMODORO'
  | 'SHORT_BREAK'
  | 'LONG_BREAK'
  | 'START_TIMER';
export type TimeType = {
  minute: number;
  second: number;
};
export type TimerItemType = {
  name: string;
  activeMenu: boolean;
  color: string;
  type: ActionType;
  time: TimeType;
};
export type TimerInitialStateType = {
  data: Array<TimerItemType>;
};
export type TimerActionType = {
  type: ActionType;
  payload?: TimerItemType;
};
export type TimerContextType = {
  state: TimerInitialStateType;
  dispatch: Dispatch<TimerActionType>;
};
export type TimerContextProviderType = PropsWithChildren;
export type TimerIsActivedType = {
  start: boolean;
  buttonText: string;
};
