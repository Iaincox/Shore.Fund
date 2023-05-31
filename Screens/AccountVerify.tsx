import PageHeader2 from "../components/PageHeader2";
import { Alert, ImageBackground, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { Constants } from "../components/conststants";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Button from '../components/Button';

const AccountVerify = () => {
  return (
    <SafeAreaView style={styles.container}>
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
        <View style={styles.viewCentre}>
          <Text style={styles.titlePaneTxt}>Thank you</Text>
          <Text style={styles.msgTxt}>
            We will now Verify your details
          </Text>
        </View>
        <View style={styles.bttnView}>
          <Button onPress={thankyouInfo}>Complete</Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

let styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  msgTxt: {
    alignItems: 'center',
    marginTop: 40,
    fontWeight: '700',
  },
  viewCentre: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlePaneTxt: {
    color: Constants.ShureFundTitleTextColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'center',
  },
  bttnView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  SubTitleTxt: {
    color: Constants.ShureFundTitleTextColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 15,
  },
  Image: {
    flex: 1,
  },
  /* textInput: {
     borderStyle: 'solid',
     borderWidth: 2,
     borderColor: '#cccccc',
     width: '90%',
     marginBottom: 15,
     marginLeft: 15,
     fontSize: 20,
     fontStyle: 'normal',
     backgroundColor: 'white',
     padding: 5,
   },
   promptText: {
     color: 'grey',
     //alignItems: "flex-end",
     // marginRight: 28,
     marginLeft: 15,
     marginBottom: 1,
     paddingBottom: 1,
   },*/
  progressStyle: {
    flex: 0.05,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 10,
  },
});



function thankyouInfo() {
  Alert.alert('Navige To Home Screen');
/*  Nav.navigate('Thank you');*/
}

export default AccountVerify;
