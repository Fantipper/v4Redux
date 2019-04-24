/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import SplashScreen from './src/screens/SplashScreen';

export default class App extends Component {
  // create constructor for App component 
  // set an initial state
  constructor(props) {
    super(props);
  
    this.state = { isLoading: true};
  }

    // define a function which resolves itself in 2 seconds
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000  // 2 seconds
        )
      );
    }

    // define a callback function componentDidMount
    async componentDidMount() {
      // Preload data from an external API
      // Preload data using AsyncStorage
      const data = await this.performTimeConsumingTask()

      if (data !== null) {
        // when we get the result back, 
        //we are going to change isLoading state to false
        // That will remove the splash screen and renders the application itself
        this.setState({ isLoading: false });
        // this.props.navigation.navigate('App');
      }
    }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{
          flex: 1,
          height: 40,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'lightgreen',
          flexDirection: 'row'
        }}>
          {/* fetch nearyby data from database when onpress*/}
          <Text style={{ color: 'white', fontSize: 16 }}>Nearby </Text>
          <FontAwesome
            name="map-marker"
            color="white"
            size={16}
          />
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
