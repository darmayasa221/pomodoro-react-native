import {MenuActionType, MenuItemType} from './store/menu/menu';

// timer type component
export type TimerProps = {
  isActivedColor: string;
  menu: Array<MenuItemType>;
  onPress: (action: MenuActionType) => void;
};
