//import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Button from "./Button";

import PageHeader2 from "./PageHeader2";
import { Constants } from "./conststants";
import * as Progress from "react-native-progress";


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

    flexDirection: "row",
    color: Constants.ShureFundTitleTextColor,
    //  backgroundColor: 'blue',
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
    marginBottom: 10,
    paddingBottom: 1,
  },
  signInView: {
    flex: 0.5,
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
    height: 40,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  signInBtn: {
    backgroundColor: Constants.LogoColour,
    color: "blue",
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
  govID: {
    // flex:0.2,
    height: 80,
    backgroundColor: Constants.lightGreyBackground,
    width: "90%",
  },
});


export default function IdVerification({ navigation }) {

  return (
    <View style={styles.container}>
      <PageHeader2 />
    </View>
  );
};
