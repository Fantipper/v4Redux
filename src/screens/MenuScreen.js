/* MenuScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, Image } from 'react-native';
import { List, ListItem, Content, Left, Thumbnail, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import images from '../assets/Images';

export default class MenuScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Content contentContainerStyle={{marginHorizontal: 14,}}>
          <List>
            <ListItem>
              <Thumbnail source={images.broShakeLogo} style={{borderColor: 'white', borderWidth: 2.5}}/>
              <Text style={styles.menuGreetingText}>HI MICHELLE!</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('history')}>
              <Icon name='area-chart' color='green' size={26} style={styles.menuIcon}  />
              <Text style={styles.menuText}>FanTip History</Text>
              </ListItem>
            <ListItem iconLeft onPress={() => this.props.navigation.navigate('about')}>
                <Image source={images.menuFanTipLogo} style={{height: 46,width: 46, resizeMode: 'cover'}}/>
                <Text style={styles.menuText}>About FanTipper</Text>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate('editProfile')}>
              <Icon name='user' color='green' size={26} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Edit Profile</Text>
            </ListItem>
            <ListItem last>
              <Icon name='sign-out' color='green' size={26} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Log Out</Text>
            </ListItem>
          </List>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#00D278',
  },
  menuGreetingText: {
    fontFamily: fonts.RobotoBold,
    fontSize: 16,
    textAlign: 'center',
    // margin: 10,
    color: 'white',
  },
  menuText: {
    fontFamily: fonts.LarsseitBold,
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    // margin: 10,
  },
  menuFanTipLogo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: 'white',
  },
  menuIcon: {
    marginVertical:8, 
    paddingLeft: 10, 
    paddingRight: 40,
    borderWidth: 0,
    borderColor: 'white',
  },
}); 