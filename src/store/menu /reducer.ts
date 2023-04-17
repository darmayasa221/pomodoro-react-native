import {MenuInitialStateType} from '../../types/store/menu/menu';
import {MenuActionType} from '../../types/store/menu/menu';

const menuReducer = (state: MenuInitialStateType, action: MenuActionType) => {
  if (action.type === 'POMODORO') {
    console.log('pomodoro');
    const newState = {...state};
    newState.menu[0].active = true;
    newState.menu[1].active = false;
    newState.menu[2].active = false;
    return newState;
  }
  if (action.type === 'SHORT_BREAK') {
    console.log('short break');
    const newState = {...state};
    newState.menu[0].active = false;
    newState.menu[1].active = true;
    newState.menu[2].active = false;
    return newState;
  }
  if (action.type === 'LONG_BREAK') {
    console.log('long break');
    const newState = {...state};
    newState.menu[0].active = false;
    newState.menu[1].active = false;
    newState.menu[2].active = true;
    return newState;
  }
  return state;
};

export default menuReducer;
