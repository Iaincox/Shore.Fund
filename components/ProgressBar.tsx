import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { Constants } from "./conststants";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as Progress from 'react-native-progress';


const styles = StyleSheet.create({
  container: {
//    paddingTop: ,
    flex: 1,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
   // alignContent: 'center',
    justifyContent: 'center',

    backgroundColor: 'white',
  },
  lineStyle: {
    flex: 1,
    height: 2,
    backgroundColor: Constants.ScreenBackgroundColor,
  },
  loginPaneTxt: {
    color: Constants.ShureFundTitleTextColor,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
export default function ProgressBar(progress) {
  console.log ('Progress=', progress);
  return (
    <View style={styles.container}>
     {/* <View style={styles.lineStyle} />
      <View>
        <Text style={{width: 50, textAlign: 'center'}}>*</Text>
      </View>
      <View style={styles.lineStyle} />*/}
      <Progress.Bar progress={0.5} height={10} color={Constants.ScreenBackgroundColor}/>
    </View>
  );
}
