/* CardComponent.js */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Icon  } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// https://expo.github.io/vector-icons/

import images from './../src/assets/Images';

class CardComponent extends Component {
  render() {
    return (
      <Card>
        <CardItem style={{marginHorizontal: 10, marginVertical: 40, borderWidth: 2 }}>
          <Left style={{flexDirection: 'column', borderWidth: 2 }}>
            {/* <Thumbnail square large source={require('../src/assets/images/spidy.jpg')} /> */}
            <Image source={require('../src/assets/images/spidy.jpg')} style={styles.profileIcon} />
             <Image source={images.broShakeLogo} style={styles.broShakeLogo} />
          </Left>
          <Body> 
            <Icon name="location-arrow" type="FontAwesome" style={{ color: "#00d278", fontSize: 18 }} >32 m</Icon>
            <Text>Location </Text>
            <Text>MELBOURNE</Text>
            <TouchableOpacity>
              <Text style={styles.readmoreText}>Read more...</Text>
            </TouchableOpacity>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  
  readmoreText: {
    textDecorationLine: 'underline',
    // color
    // fontSize
    // font
  }, 
  profileIcon: {
    resizeMode: 'cover',
     height: 80, 
     width: 150
  },
  broShakeLogo: {
    resizeMode: 'contain',
    height: 30, 
    width: 150, 
    borderWidth: 2
  }
});