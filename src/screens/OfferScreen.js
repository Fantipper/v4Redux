/* OfferScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, Image, ImageBackground } from 'react-native';
var fullWidth = Dimensions.get('window').width; //full width
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonText from '../../Components/ButtonText';
import { Row } from 'native-base';
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
          <ImageBackground
            style={{ height: 350, width: fullWidth }}
            resizeMode= 'cover'
            source={require('../assets/images/userA/background-01.jpg')}>
            <View style={styles.overlay}>
              <Image
                style={styles.creatorIcon}
                source={require('../assets/images/userA/861.jpg')}/>
              <Text style={styles.creatorName}>
                  DJ Ash Millott
              </Text>
              <Text style={styles.creatorLocation}>
                  MOSCOW, RUSSIA
              </Text>
              <View style={styles.shareBtnRow}>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={{marginHorizontal:6}}
                    name="facebook" 
                    backgroundColor='#3b5998'>
                      <ButtonText>Share</ButtonText>
                  </Icon.Button>
                </View>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={{marginHorizontal:6}}
                    name="twitter" 
                    backgroundColor='#4099FF'>
                      <ButtonText>Tweet</ButtonText>
                  </Icon.Button>
                </View>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={{marginHorizontal:6}}
                    name="instagram" 
                    backgroundColor='#DA3176'>
                      <ButtonText>Share</ButtonText>
                  </Icon.Button>
                </View>
              </View>
              <View style={styles.shareFanTip}>
                <Icon.Button 
                  style={{marginHorizontal:6}}
                  name="paperclip" 
                  color='#8C8C8C'
                  backgroundColor='#DDDDDD'>
                    <ButtonText style={{color: '#8C8C8C'}}>FanTipper.com/nameOfCreator</ButtonText>
                </Icon.Button>
              </View>
            </View>
          </ImageBackground>
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
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'white', 
    paddingVertical: 16,
  },
  creatorIcon: {
    height: 100, 
    width: 100, 
    borderRadius: 100 / 2, 
    borderColor: 'white', 
    borderWidth: 2,
    marginBottom: 20,
  },
  creatorName:{
    fontFamily: fonts.LarsseitBold,
    fontSize: 32,
    color: 'white',
    lineHeight: 30,
    marginVertical: 10,
  },
  creatorLocation: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 16,
    letterSpacing: 1.5,
    color: '#7e7e7e',
    lineHeight: 30
  },
  shareBtnRow: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  shareBtnContainer: {
    paddingHorizontal: 6
  },
  shareFanTip: {
    // paddingBottom: 16,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  }
});