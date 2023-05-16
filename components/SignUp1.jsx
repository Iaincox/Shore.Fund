import React, {useState} from "react";
import { View, Text,  StyleSheet, TextInput } from "react-native";
//import { useNavigation } from '@react-navigation/native';
//import SelectDropdown from 'react-native-select-dropdown'

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
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
//  Nav = useNavigation();
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
                   onChangeText={(value) =>{setName(value); console.log('Name=',name);}} />
        <Text style={styles.textLeft}>Email</Text>
        <TextInput style={styles.textInput}
                   placeholder={'email'}
                   inputMode={"email"}
                   autoCorrect={false}
                   onChangeText={(value) =>{setEmail(value); console.log('Email=',email);}} />
        <View>
          <Text style={styles.textLeft}>Telephone</Text>
          <TextInput style={styles.textInput}
                     placeholder={"Telephone number"}
                     inputMode={"tel"}
                     keyboardType={'phone-pad'}
                     onChangeText={(value) => {setPhoneNo(value);}}
                     /*onChangeText={(value) =>{rphone= value; console.log('Phone',phone);}*/
          />

        </View>
      </View>
      {/*<Button>Sign In</Button>*/}
      <View style={styles.signInView}>
        <Button disable={true} onPress={() => {
          if (name ===''){
            alert('Name cannot be left blank!');
            return;
          }
          if(email ===''){
            alert('An email address must be provided');
            return;
          }
          if (phoneNo===''){
            alet('A Phone number must be provided for the account');
            return;
          }
          navigation.navigate('Company Detail');
        }}>
          Continue
        </Button>
      </View>
    </View>);
};

//let Name='';
////let Email = '';
//let phone = '';
//let Nav = null;

/*function validatePhone(e) {
  e.target.value
}*/

/*function SignInPressed(){
  alert("pressed");
}*/
//export default LoginScreen;
