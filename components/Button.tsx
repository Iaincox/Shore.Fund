import { Pressable, StyleSheet, Text, View } from 'react-native';
import {Constants} from './conststants';


const Colors = {
  primary500: '#72063c',
  primary600: '#640233',
  primary700: '#4e0329',
  primary800: '#3b021f',
  accent500: '#ddb52f',
  shorefundColor: Constants.shorefundColor,
};

function Button({children, onPress }) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.shorefundColor,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '90%',
    height: '20%',
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
