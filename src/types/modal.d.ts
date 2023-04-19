import {Dispatch} from 'react';
import {TimerActionType, TimerItemType} from './store/timer/timer';
import {TaskActionType} from './store/task/task';
// modal type component
export type TypeModal = 'TIMER' | 'TASK' | string;
export type IsModalActivedType = {
  type: TypeModal;
  isActived: boolean;
};
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

export type TaskFormProps = {
  color: string;
  onSave: Dispatch<TaskActionType>;
  modalOff: () => void;
};
