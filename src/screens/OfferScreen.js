/* OfferScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text,  } from 'react-native';

export default class OfferScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>OfferScreen</Text>
        <Text style={styles.instruction}>This screen show latest offers</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  }
});