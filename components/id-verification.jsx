import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, Switch } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useNavigation } from '@react-navigation/native';
import Button from "./Button";

import PageHeader2 from "./PageHeader2";
import { Constants } from "./conststants";

//import ProgressBar from "./ProgressBar";
import * as Progress from "react-native-progress";
import { isEnabled, setEnabled } from "react-native/Libraries/Performance/Systrace";

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    //  alignItems: "center",
    // justifyContent: "flex-start",
    backgroundColor: "white",
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
    color: "grey",
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
  DropDown: {
    width: "90%",
    marginBottom: 15,
  },
  progressStyle: {

    flex: 0.05,
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    //backgroundColor: 'red',
    marginLeft: 15,
    marginBottom: 10,
  },
});

const switchHandler = () => {
  console.log("Switch Handler", isEnabled());
  setIsEnabled(true);
};

export default function IdVerification({ navigation }) {


  return (
    <View style={styles.container}>
      <PageHeader2 />
      {/*  <ProgressBar progress={0.25}/>*/}
      <View style={styles.progressStyle}>
        <Progress.Bar progress={0.75} height={10} width={325} color={Constants.ScreenBackgroundColor} />
      </View>
      <View style={styles.loginPane}>
        <Text style={styles.loginPaneTxt}>ID Verification</Text>
        <Text style={styles.textLeft}>Company name</Text>
        <TextInput style={styles.textInput} placeholder={"Company name"} />
        <Text style={styles.textLeft}>Company type</Text>
        <View style={styles.DropDown}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={companyType}
            search={false}
            boxStyles={{borderRadius:0}}
            defaultOption={{ key: "2", value: "Private company limited by shares (LTD)" }}
          />
        </View>
        {/* <TextInput style={styles.textInput} placeholder={"email"} />*/}
        <View>
          <Text style={styles.textLeft}>Vat Registered</Text>
          <Switch
            onValueChange={() => {
              setIsEnabled(previousState => !previousState);
            }}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.signInView}>
        <Button>Continue</Button>
      </View>
    </View>);
};

/*
function SignInPressed() {
  alert("pressed");
}
*/

//export default LoginScreen;
