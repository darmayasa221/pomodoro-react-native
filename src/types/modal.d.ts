import {TimerItemType} from './store/timer/timer';

// modal type component
export type SettingTimerProps = {
  color: string;
  data: Array<TimerItemType>;
  onCount: (action: TimerActionType) => void;
  onSave: () => void;
};

export type SettingTimerItemProps = Pick<TimerItemType, 'name' | 'time'> &
  Pick<SettingTimerProps, 'onCount'>;
