/* OfferScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, Image } from 'react-native';
var fullWidth = Dimensions.get('window').width; //full width
export default class OfferScreen extends Component {
  render() {
    return(
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>OfferScreen</Text>
      //   <Text style={styles.instruction}>This screen show latest offers</Text>
      // </View>
      <View style={styles.container}>
      <ScrollView>
        <View style={{}}>
          <Image
            style={{ height: 300, width: fullWidth }}
            resizeMode= 'cover'
            source={require('../assets/images/userA/background-01.jpg')}/>
          <View style={styles.overlay}>
            <Image
              style={styles.creatorIcon}
              // resizeMode= 'cover'
              source={require('../assets/images/userA/861.jpg')}/>
            <Text 
              style={{
                fontFamily: fonts.LarsseitBold,
                fontSize: 30,
                color: 'white',
                textAlign: 'center',
                lineHeight: 30
                }}>
                DJ Ash Millott
            </Text>
            </View>
        </View>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',


  },
  creatorIcon: {
    height: 100, 
    width: 100, 
    borderRadius: 100 / 2, 
    borderColor: 'white', 
    borderWidth: 2
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  }
});