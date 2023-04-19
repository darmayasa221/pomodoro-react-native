import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonPrimary from '../UI/ButtonPrimary';

const SettingTimerItem = () => {
  return (
    <View style={styles.settingTimerItemContainer}>
      <Text style={styles.textTitle}>ABC</Text>
      <View style={styles.settingTimerItemWrapper}>
        <Text style={styles.textNumber}>Minute: 1</Text>
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
    fontWeigh: 800,
    alignSelf: 'center',
  },
  textNumber: {
    color: 'white',
    fontSize: 22,
    fontWeigh: 800,
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
