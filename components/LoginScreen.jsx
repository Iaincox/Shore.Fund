import * as React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

import PageHeader from "./PageHeader";
import Button from "./Button";
//import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';

const LogoColour = "#08f7c9";
const ScreenBackgroundColor = "#08126d";

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    //  alignItems: "center",
    // justifyContent: "flex-start",
    backgroundColor: ScreenBackgroundColor,
  },
  loginPane: {
    color: "white",
    // backgroundColor: 'powderblue',
    //ralignItems: 'flex-start',
    // justifyContent: 'flex-start',
    marginLeft: 5,
    paddingLeft: 15,
  },
  loginPaneTxt: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "90%",
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontStyle: "normal",
    backgroundColor: "white",
    padding: 5,
  },
  textRight: {
    color: "white",
    alignItems: "flex-end",
    marginRight: 28,
  },
  signInView: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
    height: 40,
   // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  signInBtn: {
    backgroundColor: LogoColour,
  },
});
export default function LoginScreen({ navigation}) {
  return (
    <View style={styles.container}>
      <PageHeader />
      <View style={styles.loginPane}>
        <Text style={styles.loginPaneTxt}>Sign in</Text>
        <TextInput style={styles.textInput} placeholder={"User name"} />
        <TextInput style={styles.textInput} placeholder={"Password"} />
      </View>
      <View style={styles.textRight}>
        <Text style={styles.textRight}>Forgotten Password</Text>
      </View>
      {/*<Button>Sign In</Button>*/}
      <View style={styles.signInView}>
        <Button onPress={SignInPressed} color={LogoColour}>Sign In</Button>
        <Button>Continue with Google</Button>
        <Button>Continue with Apple</Button>
      </View>
    </View>);
};

function SignInPressed(){
  alert("pressed");
}
//export default LoginScreen;
