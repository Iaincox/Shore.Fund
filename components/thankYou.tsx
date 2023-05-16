import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import PageHeader2 from './PageHeader2';
//import Progress from 'react-native-progress';
import { Constants } from './conststants';
import React from 'react';
import * as Progress from 'react-native-progress';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
import PageHeader from "./PageHeader";

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: 'white',
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
    color: Constants.ShureFundTitleTextColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Image: {
    flex: 1,
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '90%',
    marginBottom: 15,
    fontSize: 20,
    fontStyle: 'normal',
    backgroundColor: 'white',
    padding: 5,
  },
  textLeft: {
    color: 'grey',
    marginBottom: 1,
    paddingBottom: 1
  },
  signInView: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInBtn: {
    backgroundColor: Constants.LogoColour
  },
  DropDown: {
    width: '90%',
    marginBottom: 15
  },
  progressStyle: {
    flex: 0.05,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 10,
  },
  govID: {
    // flex:0.2,
    height: 80,
    backgroundColor: Constants.lightGreyBackground,
    width: '90%',
  }
});

let Nav = null;


export default function ThankYou({ navigation }) {
  Nav = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Constants.BackgroundGreenImage}
        resizeMode="cover"
        style={styles.Image}>
        <PageHeader2 />
        <View style={styles.progressStyle}>
          <Progress.Bar
            progress={1}
            height={10}
            width={325}
            color={Constants.ScreenBackgroundColor}
          />
        </View>
        <View style={styles.loginPane}>
          <Text style={styles.loginPaneTxt}>Thank you</Text>
          <Text style={styles.textLeft}>
            We will now Verify your details
          </Text>
        </View>
        <View style={styles.signInView}>
          <Button onPress={thankyouInfo}>Complete</Button>
        </View>
      </ImageBackground>
    </View>
  );
}

function thankyouInfo() {
  Alert.alert('Navige To Home Screen');
  Nav.navigate('Thank you');
}
