/* MessageScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

export default class MessageScreen extends Component {
  render() {
    return(
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
                Messages
            </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  }
}); 