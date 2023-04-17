import {createContext} from 'react';
import {MenuContextType} from '../../types/store/menu/menu';

const MenuContext = createContext<MenuContextType>({} as MenuContextType);

export default MenuContext;
