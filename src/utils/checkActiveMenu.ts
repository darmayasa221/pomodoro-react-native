import {MenuInitialStateType} from '../types/store/menu/menu';

const checkActiveMenu = (params: MenuInitialStateType) => {
  const actived = params.menu.find(({active}) => active === true);
  return actived;
};

export default checkActiveMenu;
