import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from './../src/assets/Fonts';

const buttonText = props => (
  // <Text style={styles.mainText}>{props.children}</Text>
  <Text {...props} style={[styles.mainText, props.style]}>
  {props.children}
</Text>
);

const styles = StyleSheet.create({
  mainText: {
    fontFamily: fonts.Roboto,
    fontSize: 17,

    color: 'white', // inactive color  
  }
});

export default buttonText;