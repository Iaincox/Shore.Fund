import {Image, StyleSheet, View} from 'react-native';
import {Constants} from './conststants';

const styles = StyleSheet.create({
  pagetitle: {
    alignItems: 'center',
    //justifyContent: 'center',
    /* height: '20%',
     width: '100%',*/
    color: Constants.ShureFundTitleTextColor,
    backgroundColor: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  logo: {
    marginTop: 5,
    marginBottom: 5,
  },
});
export default function PageHeader2() {
  return (
    <View style={styles.pagetitle}>
      <Image style={styles.logo} source={Constants.IconImage} />
    </View>
  );
}
