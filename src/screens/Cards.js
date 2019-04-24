/* Cards.js */
import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Cards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cards</Text>
      </View>
    );
  }
}

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d278',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});