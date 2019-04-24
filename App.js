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
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text>Reload the App the see a splash screen</Text>
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
