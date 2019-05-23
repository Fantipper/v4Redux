/* MessageScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text,  } from 'react-native';

export default class MessageScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>MessageScreen</Text>
        <Text style={styles.instruction}>All message will be shown here</Text>
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