import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Constants} from '../components/conststants';
import * as Progress from 'react-native-progress';
import React, {useState} from 'react';
import PageHeader2 from '../components/PageHeader2';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLockKeyhole} from '@fortawesome/pro-solid-svg-icons';
import Button from '../components/Button';


// @ts-ignore
const AccountSetup = ({navigation}) => {
  const [AccountName, setAccountName] = useState('');
  const [SortCode, setSortCode] = useState('');
  const [AccountNumber, setAccountNumber] = useState('');
  const [ConfirmAccNumber, setConformAccNumber] = useState('');
  const [ConfimAccHolder, setConfirmAccHolder] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} />
      <PageHeader2 />
      <View style={styles.progressStyle}>
        <Progress.Bar
          progress={0.5}
          height={10}
          width={325}
          color={Constants.ScreenBackgroundColor}
        />
      </View>
      <Text style={styles.SubTitleTxt}>Bank Details</Text>
      <View>
        {/* <Text style={styles.promptText}>Fill in your details</Text>*/}
        <Text style={styles.promptText}>Account Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Account name'}
          onChangeText={value => {
            setAccountName(value);
            console.log('Acc Name=', AccountName);
          }}
        />
        <Text style={styles.promptText}>Sort Code</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'sort code'}
          autoCorrect={false}
          onChangeText={value => {
            setSortCode(value);
            console.log('Sort Code =', SortCode);
          }}
        />
        <Text style={styles.promptText}>Account number</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Account Number'}
          autoCorrect={false}
          onChangeText={value => {
            setAccountNumber(value);
            console.log('Acc No=', AccountNumber);
          }}
        />
        <Text style={styles.promptText}>Confirm Account number</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Confirm Account Number'}
          autoCorrect={false}
          onChangeText={value => {
            setConformAccNumber(value);
            console.log('Confirm Acc No =', ConfirmAccNumber);
          }}
        />
      </View>
      <View style={styles.authmsg}>
        <Switch
          style={styles.switchPos}
          onValueChange={() => {
            setConfirmAccHolder(previousState => !previousState);
            console.log('Selected= ', ConfimAccHolder);
          }}
          value={ConfimAccHolder}
        />
        <Text style={styles.promptText}>Confirm Account Holder</Text>
      </View>
      <View style={styles.authmsg}>
        <FontAwesomeIcon
          icon={faLockKeyhole}
          size={60}
          style={styles.switchPos}
        />
        <Text style={styles.authority}>
          By Tapping the button, you confim the information is accurate and you
          authorise the respective Shure Fund entities to deduct amounts owed
          from your bank account.
        </Text>
      </View>
      <View style={styles.bttnView}>
        <Button
          onPress={() => {
            if (AccountName === '') {
              Alert.alert('Account Name cannot be left blank!');
              return;
            }
            if (SortCode === '') {
              Alert.alert('A Sort Code must be provided');
              return;
            }
            if (AccountNumber === '') {
              Alert.alert('An Account number must be provided');
              return;
            }
            if (ConfirmAccNumber === '') {
              Alert.alert('The Account Number must be Confirmed');
              return;
            }
            if (AccountNumber !== ConfirmAccNumber) {
              Alert.alert('The Account Number and the ConFirmation must match');
            }
            navigation.navigate('AccountSetupVerify');
          }}>
          Continue
        </Button>
      </View>
    </SafeAreaView>
  );
};

let styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  bttnView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  authmsg: {
    marginTop: 5,
    marginBottom: 15,
    flexDirection: 'row',
  },
  switchPos: {
    marginLeft: 15,
  },
  authority: {
    marginLeft: 5,
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '75%',
  },
  SubTitleTxt: {
    color: Constants.ShureFundTitleTextColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
  },
  textInput: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '90%',
    marginBottom: 10,
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
  },
  progressStyle: {
    flex: 0.05,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 10,
  },
});
export default AccountSetup;
