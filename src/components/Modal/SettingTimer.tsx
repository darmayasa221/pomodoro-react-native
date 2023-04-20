import React, {FC, memo, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SettingTimerItem from './SettingTimerItem';
import {SettingTimerProps} from '../../types/modal';
import ButtonCostum from '../UI/ButtonCostum';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const SettingTimer: FC<SettingTimerProps> = ({
  color,
  data,
  onCount,
  onSave,
}) => {
  const dataMemo = useMemo(() => data, [data]);
  return (
    <View
      style={{
        ...styles.settingTimerContainer,
        backgroundColor: color,
      }}>
      <View style={styles.wrapperItem}>
        {dataMemo.map(({name, defaultTime}) => (
          <SettingTimerItem
            onCount={onCount}
            key={name}
            name={name}
            defaultTime={defaultTime}
          />
        ))}
      </View>
      <ButtonCostum onPress={onSave} style={styles.button}>
        <FontAwesomeIcon name="plus-circle" size={20} color={'white'} />
        <Text style={styles.text}>Add Time</Text>
      </ButtonCostum>
    </View>
  );
};

export default memo(SettingTimer);

const styles = StyleSheet.create({
  settingTimerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    rowGap: 10,
  },
  wrapperItem: {
    width: '60%',
    rowGap: 15,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    height: 50,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 5,
    opacity: 0.5,
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontWeight: '800',
  },
});
