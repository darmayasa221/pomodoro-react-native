import {TimerInitialStateType} from '../types/store/timer/timer';

const checkActiveMenu = (params: TimerInitialStateType) => {
  const actived = params.menu.find(({activeMenu}) => activeMenu === true);
  return actived;
};

export default checkActiveMenu;
