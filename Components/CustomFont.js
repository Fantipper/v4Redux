import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from './../src/assets/Fonts';

const headingText = props => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontFamily: fonts.Larsseit,
    fontSize: 20,
  }
});

export default headingText;