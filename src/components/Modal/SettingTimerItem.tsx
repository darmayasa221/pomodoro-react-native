import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonPrimary from '../UI/ButtonPrimary';
import {SettingTimerItemProps} from '../../types/modal';

const SettingTimerItem: FC<SettingTimerItemProps> = ({name, time}) => {
  return (
    <View style={styles.settingTimerItemContainer}>
      <Text style={styles.textTitle}>{name}</Text>
      <View style={styles.settingTimerItemWrapper}>
        <Text style={styles.textNumber}>Minute: {time?.minute}</Text>
        <View style={styles.buttonWrapper}>
          <ButtonPrimary styleView={styles.button} text="+" />
          <ButtonPrimary styleView={styles.button} text="-" />
        </View>
      </View>
    </View>
  );
};

export default SettingTimerItem;

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
