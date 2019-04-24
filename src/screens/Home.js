/* Home.js */
import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button 
} from 'react-native';

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
        <View style={styles.nearbyBar}>
          {/* fetch nearyby data from database when onpress*/}
          <Text style={styles.nearbyText}>Nearby </Text>
          <Icon
            name="compass"
            color="white"
            size={18}
          ></Icon>
        </View>
        <View style={styles.cardsContainer}>
        <Button title="Cards" onPress={() => this.props.navigation.navigate('Cards')} />
          <Text>Feed</Text>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  nearbyBar: {
    flex: 1,
    height: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00d278',
    flexDirection: 'row'
  },
  nearbyText: {
    color: 'white',
    fontSize: 16
  },
  cardsContainer: {
    flex: 12,
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    flexDirection: 'row'
  }
});