import {TimerItemType} from './store/timer/timer';

// modal type component
export type SettingTimerProps = {
  color: string;
  data: Array<TimerItemType>;
};

export type SettingTimerItemProps = Pick<TimerItemType, 'name' | 'time'>;
