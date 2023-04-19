import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import SettingTimerItem from './SettingTimerItem';
import {SettingTimerProps} from '../../types/modal';

const SettingTimer: FC<SettingTimerProps> = ({color}) => {
  return (
    <View
      style={{
        ...styles.settingTimerContainer,
        backgroundColor: color,
      }}>
      <View style={styles.wrapperItem}>
        <SettingTimerItem />
      </View>
    </View>
  );
};

export default SettingTimer;

const styles = StyleSheet.create({
  settingTimerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  wrapperItem: {
    width: '60%',
  },
});
