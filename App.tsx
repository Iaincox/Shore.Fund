import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from "./components/LoginScreen";
const LogoColour = '#08f7c9';
const ScreenBackgroundColor = '#08126d';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ScreenBackgroundColor,
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
    color: LogoColour,
  },
});

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/*<View style={styles.pagetitle}>
        <Text>Home Screen</Text>
      </View>*/}
      <View>
        <Image
          style={styles.logo}
          source={require('./assets/Images/BannerLogo.png')}
        />
      </View>
      <View style={styles.byline}>
        <Text style={styles.byline}>THE FRAUD-FREE, SECURE PAYMENT PLATFORM</Text>
      </View>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details Screen 2"
        onPress={() => navigation.navigate('Details2')}
      />
    </View>
  );
};

function DetailsScreen2() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen 2</Text>
    </View>
  );
}


/*const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <View>
          <Image
            style={styles.logo}
            source={require('./assets/Images/BannerLogo.png')}
          />
        </View>
        <View style={styles.byline}>
          <Text style={styles.byline}>THE FRAUD-FREE, SECURE PAYMENT PLATFORM</Text>
        </View>
      </View>
      <View>
        <Text>Sign in</Text>
        <TextInput placeholder={'User name'} />
        <TextInput placeholder={'Password'} />
      </View>
      <Button
        title="Go to Details Screen 2"
        onPress={() => navigation.navigate('Details2')}
      />
    </View>
  );
};*/


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shure Fund" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Details2" component={DetailsScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//      <Stack.Screen name="Login" component={loginScreen} />
export default App;
