/* MenuScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text,  } from 'react-native';

export default class MenuScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>MenuScreen</Text>
        <Text style={styles.instruction}>Will replace by our menu </Text>
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