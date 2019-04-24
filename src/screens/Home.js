import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SplashScreen from './SplashScreen';


class Home extends Component {

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{
          flex: 1,
          height: 30,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00d278',
          flexDirection: 'row'
        }}>
          {/* fetch nearyby data from database when onpress*/}
          <Text style={{ color: 'white', fontSize: 16 }}>Nearby </Text>
          <Icon
            name="compass"
            color="white"
            size={18}
          ></Icon>
        </View>
        <View style={{
          flex: 12,
          height: 40,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'lightblue',
          flexDirection: 'row'
        }}>
          <Text>Feed</Text>
        </View>
      </View>
    );
  }
}

export default Home;