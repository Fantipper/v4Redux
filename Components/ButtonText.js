import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from '../src/assets/Fonts';

// const AllTexts = {
//   // export default AllTexts = {
//   ButtonText,
//   MainText,
// };

const buttonText = props => (
  // <Text style={styles.mainText}>{props.children}</Text>
  <Text {...props} style={[styles.buttonTexts, props.style]}>
  {props.children}
</Text>
);

const styles = StyleSheet.create({
  buttonTexts: {
    fontFamily: fonts.Roboto,
    fontSize: 17,
    color: 'white', // inactive color  
  }
});

export default buttonText;
