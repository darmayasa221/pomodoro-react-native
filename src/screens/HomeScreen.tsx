import React, {FC, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../components/UI/Card';
import ButtonPrimary from '../components/UI/ButtonPrimary';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  console.log('home screen');
  // const navigationHandler = useCallback(
  //   (to: 'Pomodoro' | 'Home') => {
  //     navigation.navigate(to);
  //   },
  //   [navigation],
  // );
  // const onPressHandler = useCallback(
  //   (to: 'Pomodoro' | 'Home') => {
  //     navigationHandler(to);
  //   },
  //   [navigationHandler],
  // );
  const navigationHandler = (to: 'Pomodoro' | 'Home') => {
    navigation.navigate(to);
  };

  const onPressHandler = (to: 'Pomodoro' | 'Home') => {
    navigationHandler(to);
  };

  return (
    <View style={styles.homeScreenContainer}>
      <Card style={styles.card}>
        <ButtonPrimary
          style={{...styles.pomodoroButton, ...styles.button}}
          text="Pomodoro"
          onPress={() => {
            onPressHandler('Pomodoro');
          }}
        />
        <ButtonPrimary
          style={{...styles.shortBreakButton, ...styles.button}}
          text="Short Break"
        />
        <ButtonPrimary
          style={{...styles.longBreakButton, ...styles.button}}
          text="Long Break"
        />
      </Card>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    height: 300,
    justifyContent: 'space-around',
  },
  button: {
    padding: 20,
  },
  pomodoroButton: {
    backgroundColor: '#d44949',
  },
  shortBreakButton: {
    backgroundColor: '#48d4a2',
  },
  longBreakButton: {
    backgroundColor: '#48d4d3',
  },
});
