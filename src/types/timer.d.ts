import {TimerActionType, TimerItemType} from './store/timer/timer';

// timer type component
export type TimerProps = {
  isActived: TimerItemType;
  menu: Array<TimerItemType>;
  onPress: (action: TimerActionType) => void;
};
