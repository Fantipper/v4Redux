/* OfferScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, Image, ImageBackground } from 'react-native';
import { ListItem, Body, Content, Card, CardItem } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import images from '../assets/Images';
import Fonts from '../assets/Fonts';
import CT from '../assets/CT';

var fullWidth = Dimensions.get('window').width; //full width
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
        {/* <View style={{}}> */}
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
                      <CT.ButtonText>Share</CT.ButtonText>
                  </Icon.Button>
                </View>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={styles.shareBtnStyle}
                    name="twitter" 
                    backgroundColor='#4099FF'>
                    <CT.ButtonText>Tweet</CT.ButtonText>
                  </Icon.Button>
                </View>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={styles.shareBtnStyle}
                    name="instagram" 
                    backgroundColor='#DA3176'>
                    <CT.ButtonText>Share</CT.ButtonText>
                  </Icon.Button>
                </View>
              </View>
              <View style={styles.shareFanTip}>
                <Icon.Button 
                  style={styles.shareBtnStyle}
                  name="paperclip" 
                  color='#8C8C8C'
                  backgroundColor='#DDDDDD'>
                  <CT.ButtonText style={{color: '#8C8C8C'}}>FanTipper.com/diash</CT.ButtonText>
                </Icon.Button>
              </View>
            </View>
          </ImageBackground>
          <Content>
            <ListItem>
              <View style={styles.fantipContainer}>
                <Image source={images.broShakeLogo} style={styles.broShakeLogo}/>
              </View>
            </ListItem>
            <ListItem>
              <View style={styles.tipCountSection}>
                <View style={styles.tipColumnSection}>
                  <Text style={styles.subtitleText}>TIPS</Text>
                  <Text style={styles.tipMoneyText}>2801</Text>
                </View>
                <View style={styles.tipColumnSection}>
                  <Text style={styles.subtitleText}>$</Text>
                  <Text style={styles.tipMoneyText}>516.80</Text>
                </View>
              </View>
            </ListItem>
            <ListItem>
              <View>
                <Text style={styles.quoteText}>"Your generosity will help me reach me target to record a new album."</Text>
                <Text style={styles.targetText}>11% of $5000 target reached</Text>
              </View>
            </ListItem>
            <ListItem>
              <Icon name='heart' color='#00d278' size={18} style={{marginRight: 10}}/><CT.Header3Text>top fans</CT.Header3Text>
            </ListItem>
            <ListItem itemHeader style={{borderColor: 'blue', borderWidth: 0, paddingBottom: 20, paddingTop: 20}}>
              {/* <View style={{flexDirection: 'row-reverse'}}> */}
                <CT.Header3Text>about</CT.Header3Text>
              {/* </View> */}
              </ListItem>
              <ListItem>
              {/* <View style={{}}> */}
              <Body>
                <Text style={{color: 'black'}}>From mad beats to wicjed licks, DJ Ash mixes like a boss.</Text>  
                <Text>Paul Oakenfold describes his early life as a "bedroom DJ" in a podcasted interview with Vancouver's 24 Hours, stating he grew up listening to The Beatles. Later 21-year-old Oakenfold and lan Paul moved to 254 West 54th Sterrt. Studio 54's Steve Rubell ran the place and onlt alliwed popular people inside.</Text>
                <CT.ReadmoreText />
                </Body>
              {/* </View> */}
            </ListItem>
            <Card transparent style={{paddingVertical:20, borderBottomColor: 'black', borderBottomWidth: 1, }}>
              <CardItem><CT.Header3Text>gallery</CT.Header3Text></CardItem>
              <CardItem>
                <Body>
                  <Text>sadiho iehfijrgio jt4 i3u90909ds9v09 09 k kskfk s </Text>
                  <Text>sadiho iehfijrgio jt4 i3u90909ds9v09 09 k kskfk s </Text>
                </Body>
              </CardItem>
            </Card>
            <Card transparent style={{paddingVertical:20, borderBottomColor: 'black', borderBottomWidth: 1}}>
              <CardItem><CT.Header3Text>gallery</CT.Header3Text></CardItem>
              <CardItem>
                <Body>
                  <Text>sadiho iehfijrgio jt4 i3u90909ds9v09 09 k kskfk s </Text>
                  <Text>sadiho iehfijrgio jt4 i3u90909ds9v09 09 k kskfk s </Text>
                </Body>
              </CardItem>
            </Card>
            <ListItem>
              <View style={{borderColor: 'blue', borderWidth: 2, paddingBottom: 20, paddingTop: 20}}>
              <CT.Header3Text>gallery</CT.Header3Text>
              </View>
              <Body>
              {/* <View> */}
              <Text>sadiho iehfijrgio jt4 i3u90909ds9v09 09 k kskfk s </Text>
              <Text>sadiho iehfijrgio jt4 i3u90909ds9v09 09 k kskfk s </Text>
              {/* </View> */}</Body>
            </ListItem>
            <ListItem>
              <Icon name='comment' color='#00d278' size={18} style={{marginRight: 10}} /><CT.Header3Text>2 messages</CT.Header3Text>
            </ListItem>
            <ListItem>
              <Icon name='users' color='#00d278' size={18} style={{marginRight: 10}} /><CT.Header3Text>fanbase</CT.Header3Text>
            </ListItem>
            <ListItem>
              <CT.Header3Text>Become a fan of DJ Ash Millott and leave a message of support!</CT.Header3Text>
              {/* <View style={styles.fantipContainer}> */}
                <Image source={images.broShakeLogo} style={styles.broShakeLogo}/>
              {/* </View> */}
            </ListItem>
          </Content>
        {/* </View> */} 
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
    backgroundColor: 'white',
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
    lineHeight: 30,
    textTransform: 'uppercase'
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
  fantipContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  broShakeLogo: {
    resizeMode: 'contain',
    height: 56,
    borderRadius: 4,
  },
  tipCountSection: {
    flexDirection: 'row',
  },
  tipColumnSection: {
    flexDirection: 'column',
    width: 150,
  },
  tipMoneyText: {
    fontFamily: Fonts.LarsseitBold,
    fontSize: 40, 
    color: '#464646',
  },
  quoteText: {
    fontFamily: fonts.LarsseitBold,
    color: '#00d278', //fan tip green
    fontSize: 26,
    lineHeight: 30,
  },
  targetText: {
    fontFamily: fonts.LarsseitBold,
    color: '#cbcdce',
    fontSize: 14,
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  }
});