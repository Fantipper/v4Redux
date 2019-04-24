/* Cards.js */
import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ListView,
  TouchableOpacity, 
  Image 
} from 'react-native';

class Cards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <Image 
            style={styles.cardImage} 
            source={require('../assets/images/spidy.jpg')}
          />
          <Text>Card 1</Text>
        </TouchableOpacity>
        <Text>Cards</Text>
      </View>
    );
  }
}

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d278',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  card: {
    borderColor: 'yellow',
    borderWidth: 2,
    width: '96%',
  },
  cardImage: {
		width: '40%', 
    height: 100,
    resizeMode: 'cover',
  }
});