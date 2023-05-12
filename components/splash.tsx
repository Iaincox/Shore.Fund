import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PageHeader from './PageHeader';
import {Constants} from './conststants';

const ScreenBackgroundColor = '#08126d';
//const BackgroundGreyImage = require('../assets/Images/Background_grey_cube.png');
//const BackgroundGreenImage = require('../assets/Images/Background_green.png');

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    //  alignItems: "center",
    // justifyContent: "flex-start",
    backgroundColor: ScreenBackgroundColor,
  },
  Image: {
    flex: 1,
  },
  HeaderPosition: {
    paddingTop: 60,
    marginTop: 100,
    flex: 1,
  },
});
export default function Splash({navigation}) {

  setTimeout(() => {
    let a = getData('Registered');
    console.log('Value : ', a);
    let nextScreen = 'LoginScreen';
    if (!('Registered' in a)) {
      if (!a.Registered) {
        nextScreen = 'Sign Up';
      }
    }

    navigation.replace(nextScreen);
  }, 2000);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Constants.BackgroundGreenImage}
        resizeMode="cover"
        style={styles.Image}>
        <View style={styles.HeaderPosition}>
          <PageHeader />
        </View>
      </ImageBackground>
    </View>
  );
}


const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log('value2=', value);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    // error reading value
  }
};
//export default LoginScreen;
