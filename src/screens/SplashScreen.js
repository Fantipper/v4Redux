
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class SplashScreen extends Component {
	render() {
    return (
      <View style={styles.container}>
   		<Text>
   			Fan Tipper Splash screen testing
   		</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'orange',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
});


export default SplashScreen;