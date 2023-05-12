import * as React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'

import Button from "./Button";

import PageHeader2 from "./PageHeader2";
import { Constants } from "./conststants";
//import ProgressBar from "./ProgressBar";
import * as Progress from 'react-native-progress';

//import Progress from "react-native-progress";
//const BackgroundGreyImage = require("../assets/Images/Background_grey_cube.png");

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    //  alignItems: "center",
    // justifyContent: "flex-start",
    backgroundColor: 'white',
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
    color: Constants.ShureFundTitleTextColor,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "90%",
    marginBottom: 15,
    fontSize: 20,
    fontStyle: "normal",
    backgroundColor: "white",
    padding: 5,
  },
  textLeft: {
    color: 'grey',
    //alignItems: "flex-end",
    // marginRight: 28,
    marginBottom: 1,
    paddingBottom: 1,
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
    backgroundColor: Constants.LogoColour,
  },
  progressStyle: {

    flex:0.05,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
   //backgroundColor: 'red',
    marginLeft: 15,
    marginBottom: 10,
  }
});
export default function SignUpCompanyDetail({ navigation}) {
  return (
    <View style={styles.container}>
      <PageHeader2 />
    {/*  <ProgressBar progress={0.25}/>*/}
      <View style={styles.progressStyle}>
        <Progress.Bar progress={0.5} height={10} width={325} color={Constants.ScreenBackgroundColor}/>
      </View>
      <View style={styles.loginPane}>
        <Text style={styles.loginPaneTxt}>Company details</Text>
        <Text style={styles.textLeft} >Company name</Text>
        <TextInput style={styles.textInput} placeholder={"Company name"} />
        <Text style={styles.textLeft}>Company type</Text>
        <TextInput style={styles.textInput} placeholder={"email"} />
        <View>

        </View>
      </View>
      {/*<Button>Sign In</Button>*/}
      <View style={styles.signInView}>
        <Button>Continue</Button>
      </View>
    </View>);
};

function SignInPressed(){
  alert("pressed");
}
//export default LoginScreen;
