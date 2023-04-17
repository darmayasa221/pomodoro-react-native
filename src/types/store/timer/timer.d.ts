import {ActionType} from '../menu/menu';

// timer
export type TimerDataType = {
  name: ActionType;
  time: {
    minute: number;
    second: number;
  };
  timerIsActive: boolean;
};
