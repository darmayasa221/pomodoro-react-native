import {Dispatch, PropsWithChildren} from 'react';
export type ActionType = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK';
export type MenuItemType = {
  name: string;
  active: boolean;
  color: string;
  type: ActionType;
};
export type MenuInitialStateType = {
  menu: Array<MenuItemType>;
};
export type MenuActionType = {
  type: ActionType;
};
export type MenuContextType = {
  state: MenuInitialStateType;
  dispatch: Dispatch<MenuActionType>;
};
export type MenuContextProviderType = PropsWithChildren;
