import * as React from 'react';
import { StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import AsyncStorage from '@react-native-async-storage/async-storage';

import { Constants } from './components/conststants';
import LoginScreen from './components/LoginScreen';
import SignUp1 from './components/SignUp1';
import Splash from './components/splash';
import SignUpCompanyDetail from './components/SignUp2';
import VerificationID from './components/VerificationID';
import Thankyou from './components/thankYou';
import ThankYou from "./components/thankYou";
//import IdVerification from "./components/id-verification";
//const LogoColour = '#08f7c9';
//const ScreenBackgroundColor = '#08126d';
//const BackgroundGreyImage = require('./assets/Images/Background_grey_cube.png');

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constants.ScreenBackgroundColor
  },
  pagetitle: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#ff0000',
    fontSize: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  byline: {
    marginTop: 20,
    marginBottom: 20,
    color: Constants.LogoColour,
  },
  ImageGreyBackground: {
    color: 'white',
    backgroundColor: 'pink',
  },
});

//initialRouteName={ getData('@Registered')===1 ? "LoginScreen" : "RegisterScreen"  }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Sign Up" component={SignUp1} />
        <Stack.Screen name="Company Detail" component={SignUpCompanyDetail} />
        <Stack.Screen name="ID Verificaion" component={VerificationID} />
        <Stack.Screen name="Thank you" component={ThankYou} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
