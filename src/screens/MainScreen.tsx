import React, {useContext, memo, useCallback, useMemo} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Header from '../components/Header/Header';
import Timer from '../components/Timer/Timer';
import OutputCount from '../components/OutputCount/OutputCount';
import Tasks from '../components/Tasks/Tasks';
import TaskFooter from '../components/Tasks/TaskFooter';
import MenuContext from '../store/menu /context';
import {MenuActionType} from '../types/store/menu/menu';
import checkActiveMenu from '../utils/checkActiveMenu';

const MainScreen = () => {
  const {state: menuState, dispatch: menuDispatch} = useContext(MenuContext);
  const isActived = checkActiveMenu(menuState);
  const menuMemo = useMemo(() => menuState.menu, [menuState]);
  const menuHandler = useCallback(
    (action: MenuActionType) => {
      menuDispatch(action);
    },
    [menuDispatch],
  );
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isActived?.color,
      }}>
      <SafeAreaView />
      <Header />
      <Timer
        menu={menuMemo}
        onPress={menuHandler}
        isActivedColor={isActived?.color}
      />
      <OutputCount />
      <Tasks style={{}} />
      <View
        style={{
          ...styles.footer,
          backgroundColor: isActived?.color,
        }}>
        <TaskFooter style={{}} />
      </View>
    </View>
  );
};

export default memo(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: '-90%',
    width: '100%',
    height: '100%',
    paddingTop: 5,
  },
});
