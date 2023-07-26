import React, {FC, memo, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonPrimary from '../UI/ButtonPrimary';
import {SettingTimerItemProps} from '../../types/modal';

const SettingTimerItem: FC<SettingTimerItemProps> = ({
  name,
  defaultTime,
  onCount,
}) => {
  console.log('SETTING ITEM TIMER');
  const decreaseTimeHandler = useCallback(() => {
    onCount({type: 'DECREASE_TIMER', payload: {name}});
  }, [onCount, name]);
  const increaseTimeHandler = useCallback(() => {
    onCount({type: 'INCREASE_TIMER', payload: {name}});
  }, [onCount, name]);
  return (
    <View style={styles.settingTimerItemContainer}>
      <Text style={styles.textTitle}>{name}</Text>
      <View style={styles.settingTimerItemWrapper}>
        <Text style={styles.textNumber}>Minute: {defaultTime?.minute}</Text>
        <View style={styles.buttonWrapper}>
          <ButtonPrimary
            onPress={increaseTimeHandler}
            styleView={styles.button}
            text="+"
          />
          <ButtonPrimary
            onPress={decreaseTimeHandler}
            styleView={styles.button}
            text="-"
          />
        </View>
      </View>
    </View>
  );
};

export default memo(SettingTimerItem);

const styles = StyleSheet.create({
  settingTimerItemContainer: {
    rowGap: 10,
  },
  settingTimerItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '800',
  },
  textNumber: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    padding: 5,
    borderRadius: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
    columnGap: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
  },
});
