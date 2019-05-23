/* CardComponent.js */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Icon, View  } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// https://expo.github.io/vector-icons/

import images from './../src/assets/Images';
import fonts from './../src/assets/Fonts';
import MainText from './MainText';

class CardComponent extends Component {
  render() {

    const creatorProfile = {
      "1": require('../src/assets/images/cprofile_1.jpg'),
      "2": require('../src/assets/images/cprofile_2.jpg'),
      "3": require('../src/assets/images/cprofile_3.jpg'),
    }

    return (
      <Card>
        <CardItem style={{marginHorizontal: 10, marginVertical: 20, borderWidth: 0 }}>
          <Left style={{flexDirection: 'column', borderWidth: 0 }}>
            {/* <Thumbnail square large source={require('../src/assets/images/spidy.jpg')} /> */}
            <Image source={creatorProfile[this.props.imageSource]} style={styles.profileIcon} />
             <Image source={images.broShakeLogo} style={styles.broShakeLogo} />
          </Left>
          <Body style={{borderWidth: 0, paddingLeft: 20}}> 
            <Icon name="location-arrow" type="FontAwesome" 
              style={{ color: "#00d278" ,fontSize: 18 }} >
              <Text style={styles.distanceText}> 32 m</Text>
            </Icon>
            <Text style={styles.locationText}>Atomica</Text>
            <Text style={styles.cityText}>MELBOURNE</Text>
            <View style={{borderWidth: 0, paddingTop: 26}}>
              <TouchableOpacity>
                <MainText>
                <Text style={styles.readmoreText}>Read more...</Text></MainText>
              </TouchableOpacity>
              </View>
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
    color: '#6a6a6a', // TO-EDIT: may need to pick a darker color
    textDecorationLine: 'underline',
    fontFamily: fonts.Larsseit,
    fontSize: 18,
  }, 
  profileIcon: {
    resizeMode: 'cover',
     height: 80, 
     width: 150
  },
  broShakeLogo: {
    resizeMode: 'contain',
    height: 48, 
    width: 150, 
    borderWidth: 2,
    backgroundColor: 'yellow'
  }
});