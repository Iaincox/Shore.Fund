import * as React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown'

import Button from "./Button";

import PageHeader2 from "./PageHeader2";
import { Constants } from "./conststants";
import * as Progress from 'react-native-progress';


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
export default function SignUp1({ navigation}) {
  Nav = useNavigation();
  return (
    <View style={styles.container}>
      <PageHeader2 />
    {/*  <ProgressBar progress={0.25}/>*/}
      <View style={styles.progressStyle}>
        <Progress.Bar progress={0.25} height={10} width={325} color={Constants.ScreenBackgroundColor}/>
      </View>
      <View style={styles.loginPane}>
        <Text style={styles.loginPaneTxt}>Fill in your details</Text>
        <Text style={styles.textLeft} >Name</Text>
        <TextInput style={styles.textInput}
                   placeholder={"User name"}
                   onChangeText={(value) =>{Name=value; console.log('Name=',Name);}} />
        <Text style={styles.textLeft}>Email</Text>
        <TextInput style={styles.textInput}
                   placeholder={"email"}
                   inputMode={"email"}
                   onChangeText={(value) =>{Email=value; console.log('Email=',Email);}} />
        <View>
          <Text style={styles.textLeft}>Telephone</Text>
         {/* <SelectDropdown data={DialCodesArr.Code} onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
             />*/}
          <TextInput style={styles.textInput}
                     placeholder={"Telephone number"}
                     inputMode={"tel"}
                     onChangeText={(value) =>{phone= value; console.log('Phone',phone);}
          }/>

        </View>
      </View>
      {/*<Button>Sign In</Button>*/}
      <View style={styles.signInView}>
        <Button disable={true} onPress={continuePressed}>Continue</Button>
      </View>
    </View>);
};

let Name='';
let Email = '';
let phone = '';
let Nav = null;
function continuePressed(){
  if (Name ===''){
    alert('Name cannot be left blank!');
    return;
  }
  if(Email ===''){
    alert('An email address must be provided');
    return;
  }
  if (phone===''){
    alet('A Phone number must be provided for the account');
    return;
  }
//  navigation.replace('nextScreen')
  console.log('Navigating to ', 'Company Detail');
  Nav.navigate('Company Detail')
}
/*function SignInPressed(){
  alert("pressed");
}*/
//export default LoginScreen;
