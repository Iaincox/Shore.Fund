import {Image, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';

const LogoColour = '#08f7c9';
//const ScreenBackgroundColor = '#08126d';

const styles = StyleSheet.create({
  pagetitle: {
    alignItems: 'center',
    //justifyContent: 'center',
    /* height: '20%',
     width: '100%',*/
    color: 'white',
    backgroundColor: '#ff0000',
    fontSize: 20,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  byline: {
    marginTop: 10,
    marginBottom: 20,
    color: LogoColour,
  },
  pageHeader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default function PageHeader() {
  return (
    <View style={ styles.pageHeader}>
      <Image
        style={styles.logo}
        source={require('../assets/Images/BannerLogo.png')}
      />
      <View style={styles.byline}>
        <Text style={styles.byline}>THE FRAUD-FREE, SECURE PAYMENT PLATFORM</Text>
      </View>
    </View>
  );
}
