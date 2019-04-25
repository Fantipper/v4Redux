/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
import Cards from './src/screens/Cards';

import { createStore } from 'redux';

// const reducer = () => {

// }
// const store = createStore(reducer);
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: Home,
  Cards: Cards
});

const AppContainer = createAppContainer(AppStackNavigator);