import React, {FC, useMemo, useReducer} from 'react';
import MenuContext from './context';
import menuReducer from './reducer';
import {
  MenuContextType,
  MenuContextProviderType,
  MenuInitialStateType,
} from '../../types/store/menu/menu';

const menuInitialState: MenuInitialStateType = {
  menu: [
    {
      name: 'pomodoro',
      active: true,
      color: 'rgb(186, 73, 73)',
      type: 'POMODORO',
    },
    {
      name: 'shortBreak',
      active: false,
      color: 'rgb(56, 133, 138)',
      type: 'SHORT_BREAK',
    },
    {
      name: 'longBreak',
      active: false,
      color: 'rgb(57, 112, 151)',
      type: 'LONG_BREAK',
    },
  ],
};

const MenuContextProvider: FC<MenuContextProviderType> = ({children}) => {
  const [state, dispatch] = useReducer(menuReducer, menuInitialState);
  const stateMemo: MenuContextType = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );
  return (
    <MenuContext.Provider value={stateMemo}>{children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;
