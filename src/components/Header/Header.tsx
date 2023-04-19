import React, {memo, FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonCostum from '../UI/ButtonCostum';
import FontAwsome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {HeaderProps} from '../../types/header';

const Header: FC<HeaderProps> = ({settingOnPress}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Pomofocus</Text>
      <View style={styles.rightSide}>
        <ButtonCostum style={styles.button}>
          <FontAwsome5Icon name="user-circle" size={20} color={'white'} />
        </ButtonCostum>
        <ButtonCostum onPress={settingOnPress} style={styles.button}>
          <FontistoIcon name="player-settings" size={20} color={'white'} />
        </ButtonCostum>
        <ButtonCostum style={styles.button}>
          <FontAwsome5Icon name="chart-bar" size={20} color={'white'} />
        </ButtonCostum>
      </View>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomColor: '#424242',
    borderBottomWidth: 0.25,
    paddingBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  rightSide: {
    flexDirection: 'row-reverse',
    columnGap: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
});
