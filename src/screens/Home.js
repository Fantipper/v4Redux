/* Home.js */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import fonts from '../assets/Fonts';

import SplashScreen from './SplashScreen';
import Cards from './Cards';

import Icon from 'react-native-vector-icons/FontAwesome';
// https://expo.github.io/vector-icons/

class Home extends Component {

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
        <ScrollView>
        <View style={{ height: 150, backgroundColor: '#f5f5f5', paddingVertical: 28}}>
          <Text 
          style={{
            fontFamily: fonts.LarsseitBold,
            fontSize: 20,
            color: '#1a1a1a',
            textAlign: 'center',
            lineHeight: 30
            }}>
              Welcome to Fan Tipper,{"\n"}the world's first social{"\n"}tipping platform.
          </Text>
        </View>
        <Cards />
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center', 
    // justifyContent: 'center'
  },
  elementsContainer: {
    backgroundColor: '#ecf5fd',
    marginLeft: 24,
    marginRight: 24,
    // marginBottom: 24
  },
  nearbyBar: {
    // flex: 1,
    // position: 'absolute',
    height: 30,
    width: '100%',
    alignItems: 'center',
    // alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#00d278',
    flexDirection: 'row'
  },
  nearbyText: {
    color: 'white',
    fontSize: 16
  },
  cardsContainer: {
    // flex: 12,
    
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    // flexDirection: 'row'
  }
});