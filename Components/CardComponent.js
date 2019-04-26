/* CardComponent.js */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Icon  } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// https://expo.github.io/vector-icons/

import images from './../src/assets/Images';
import fonts from './../src/assets/Fonts';

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
          <Body style={{borderWidth: 2, paddingLeft: 20}}> 
            <Icon name="location-arrow" type="FontAwesome" 
              style={{ color: "#00d278" ,fontSize: 18 }} >
              <Text style={styles.distanceText}> 32 m</Text>
            </Icon>
            <Text style={styles.locationText}>Atomica </Text>
            <Text style={styles.cityText}>MELBOURNE</Text>
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
  distanceText: {
    fontFamily: fonts.LarsseitBold
  },
  locationText: {
    fontFamily: fonts.LarsseitBold,
    color: 'black',
    fontSize: 20,
  },
  cityText: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 16,
  },
  readmoreText: {
    textDecorationLine: 'underline',
    fontFamily: fonts.Larsseit,
    fontSize: 18,
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
    borderWidth: 2,
    backgroundColor: 'yellow'
  }
});