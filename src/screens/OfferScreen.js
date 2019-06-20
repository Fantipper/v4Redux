/* OfferScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, Image, ImageBackground } from 'react-native';

var fullWidth = Dimensions.get('window').width; //full width
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonText from '../../Components/buttonText';
import images from '../assets/Images';
import { ListItem, Content, Card, CardItem } from 'native-base';
import Fonts from '../assets/Fonts';

// import { Row } from 'native-base';
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
            style={styles.profileBackground}
            resizeMode= 'cover'
            source={require('../assets/images/userA/background-01.jpg')}>
            <View style={styles.overlay}>
              <Image
                style={styles.creatorIcon}
                source={require('../assets/images/userA/861.jpg')}/>
              <Text style={styles.creatorName}>
                  DJ Ash Millott
              </Text>
              <Text style={styles.subtitleText}>
                  MOSCOW, RUSSIA
              </Text>
              <View style={styles.shareBtnRow}>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={styles.shareBtnStyle}
                    name="facebook" 
                    backgroundColor='#3b5998'>
                      <ButtonText>Share</ButtonText>
                  </Icon.Button>
                </View>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={styles.shareBtnStyle}
                    name="twitter" 
                    backgroundColor='#4099FF'>
                    <ButtonText>Tweet</ButtonText>
                  </Icon.Button>
                </View>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={styles.shareBtnStyle}
                    name="instagram" 
                    backgroundColor='#DA3176'>
                    <ButtonText>Share</ButtonText>
                  </Icon.Button>
                </View>
              </View>
              <View style={styles.shareFanTip}>
                <Icon.Button 
                  style={styles.shareBtnStyle}
                  name="paperclip" 
                  color='#8C8C8C'
                  backgroundColor='#DDDDDD'>
                  <ButtonText style={{color: '#8C8C8C'}}>FanTipper.com/nameOfCreator</ButtonText>
                </Icon.Button>
              </View>
            </View>
          </ImageBackground>
          {/* <View style={styles.secondContainer}> */}
            <ListItem>
            <Image source={images.broShakeLogo} style={styles.broShakeLogo}/>
            </ListItem>
            <ListItem>
              <View style={styles.tipCountSection}>
                <View style={{flexDirection: 'column', alignItems: 'flex-start', width: 150}}>
                  <Text style={styles.subtitleText}>TIPS</Text>
                  <Text style={styles.tipMoneyText}>2801</Text>
                </View>
                <View style={{flexDirection: 'column',width: 150, }}>
                  <Text style={styles.subtitleText}>$</Text>
                  <Text style={styles.tipMoneyText}>516.80</Text>
                </View>
              </View>
              <View>
              <Text>"Your generosity will help me reach me target to record a new album."</Text>
              <Text>11% OF $50000 TARGET REACHED</Text>
              </View>
            </ListItem>

          {/* </View> */}
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
  profileBackground: {
    height: 350, 
    width: fullWidth,
  },
  overlay: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
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
  subtitleText: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 16,
    letterSpacing: 1.5,
    color: '#8c8c8c',
    lineHeight: 30
  },
  shareBtnRow: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  shareBtnContainer: {
    paddingHorizontal: 6
  },
  shareBtnStyle: {
    marginHorizontal: 6
  },
  secondContainer:{
    // height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 2,
  },
  broShakeLogo: {
    resizeMode: 'contain',
    height: 50,
    borderRadius: 4,
  },
  tipCountSection: {
    flexDirection: 'row',
  },
  tipMoneyText: {
    fontFamily: Fonts.LarsseitBold,
    fontSize: 40, 
    color: '#464646',
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  }
});