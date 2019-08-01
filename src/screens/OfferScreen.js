/* OfferScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, Image, ImageBackground } from 'react-native';
import { ListItem, Body, Content, Card, CardItem } from 'native-base';
// import Hr from 'react-native-hr';

import Icon from 'react-native-vector-icons/FontAwesome';

import images from '../assets/Images';
import Fonts from '../assets/Fonts';
import CT from '../assets/CT';

var fullWidth = Dimensions.get('window').width; //full width
// import { Row } from 'native-base';

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
    backgroundColor: 'white',
  },
});