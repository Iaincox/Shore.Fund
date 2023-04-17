import * as React from "react";
import { View, Text, Button, Image, StyleSheet, TextInput } from "react-native";

import PageHeader from "./PageHeader";
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
    color: 'white',
   // backgroundColor: 'powderblue',
    //ralignItems: 'flex-start',
   // justifyContent: 'flex-start',
    marginLeft: 5,
    paddingLeft: 15,
  },
  loginPaneTxt: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontStyle: "normal",
    backgroundColor: 'white',
    padding:5,
  },
  textRight: {
    color: 'white',
    alignItems: "flex-end",
    marginRight: 28,
  },
  signInView: {
    marginTop:15,
    marginBottom:15,
    width: '90%',
    height: 40,
  },
  signInBtn : {
    backgroundColor: LogoColour,
  },

  // pagetitle: {
  //   alignItems: "center",
  //   //justifyContent: 'center',
  //   /* height: '20%',
  //    width: '100%',*/
  //   color: "white",
  //   backgroundColor: "#ff0000",
  //   fontSize: 20,
  // },
 //  logo: {
 //    alignItems: "center",
 //    justifyContent: "center",
 //    marginTop: 20,
 //    marginBottom: 5,
 //    backgroundColor: "teal",
 //  },
  /* byline: {
    marginTop: 10,
    marginBottom: 20,
    color: LogoColour,
  },*/
});
export default function LoginScreen({ navigation }) {
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
      <View style={styles.signInView}>
        <Button title={"Sign In"} />
        <Button title={"Continue with Google"}/>
        <Button title={"Continue wiht Apple"}/>
      </View>
       {/* <Button
          title="Go to Details Screen 2"
          onPress={() => navigation.navigate("Details2")}
        />*/}

    </View>
  );
};

//export default LoginScreen;
