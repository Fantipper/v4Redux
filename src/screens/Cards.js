/* Cards.js */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import CardComponent from '../../Components/CardComponent';
// https://expo.github.io/vector-icons/

class Cards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Content>
          <CardComponent />
        </Content>
      </View>
    );
  }
}

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00d278',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});