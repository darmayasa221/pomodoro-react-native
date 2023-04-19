import {Dispatch} from 'react';
import {TimerActionType, TimerItemType} from './store/timer/timer';
// modal type component
export type SettingTimerProps = {
  color: string;
  data: Array<TimerItemType>;
  onCount: Dispatch<TimerActionType>;
  onSave: () => void;
};

export type SettingTimerItemProps = Pick<
  TimerItemType,
  'name' | 'defaultTime'
> &
  Pick<SettingTimerProps, 'onCount'>;
