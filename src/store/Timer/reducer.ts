import {
  TimerActionType,
  TimerInitialStateType,
} from '../../types/store/timer/timer';

const timerReducer = (
  state: TimerInitialStateType,
  action: TimerActionType,
) => {
  if (action.type === 'POMODORO') {
    const newState = {...state};
    newState.data[0].activeMenu = true;
    newState.data[1].activeMenu = false;
    newState.data[2].activeMenu = false;
    return newState;
  }
  if (action.type === 'SHORT_BREAK') {
    const newState = {...state};
    newState.data[0].activeMenu = false;
    newState.data[1].activeMenu = true;
    newState.data[2].activeMenu = false;
    return newState;
  }
  if (action.type === 'LONG_BREAK') {
    const newState = {...state};
    newState.data[0].activeMenu = false;
    newState.data[1].activeMenu = false;
    newState.data[2].activeMenu = true;
    return newState;
  }
  if (action.type === 'START_TIMER') {
    const newState = {...state};
    const item = newState.data.find(({name}) => name === action.payload?.name);
    const itemIndex = newState.data.findIndex(
      ({name}) => name === action.payload?.name,
    );
    const newItem = {
      ...item,
      time: action.payload?.time,
    };
    newState.data[itemIndex] = newItem;
    return newState;
  }
  return state;
};
export default timerReducer;
