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
  // if (action.type === 'POMODORO_START') {
  //   const newState = {...state};
  //   newState.data[0].activeMenu = false;
  //   newState.data[1].activeMenu = true;
  //   newState.data[2].activeMenu = false;
  //   return newState;
  // }
  // if (action.type === 'SHORT_BREAK_START') {
  //   const newState = {...state};
  //   newState.data[0].activeMenu = true;
  //   newState.data[1].activeMenu = false;
  //   newState.data[2].activeMenu = false;
  //   return newState;
  // }
  // if (action.type === 'LONG_BREAK_START') {
  //   const newState = {...state};
  //   newState.data[0].activeMenu = true;
  //   newState.data[1].activeMenu = false;
  //   newState.data[2].activeMenu = false;
  //   return newState;
  // }
  if (action.type === 'START_TIMER') {
    const newState = {...state};
    const payload = action.payload;

    return state;
  }
  return state;
};
export default timerReducer;
