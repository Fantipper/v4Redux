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
import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
// https://expo.github.io/vector-icons/

class Cards extends Component {
  render() {
    return (
      // <View style={styles.container}>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail 
              square large source={require('../assets/images/spidy.jpg')}
            />
            <Body> 
              <Icon name="location-arrow" color="green" size={18}></Icon>
              <Text>32 m</Text>
              <Text>Location </Text>
              <Text>MELBOURNE</Text>
              <TouchableOpacity>
                <Text style={styles.readmoreText}>Read more ...</Text>
              </TouchableOpacity>
            </Body>
          </Left>
        </CardItem>
      {/* </Card>
      <Card> */}
        <CardItem>
          <Left>
            <Thumbnail 
              square large source={require('../assets/images/spidy.jpg')}
            />
            <Body> 
              <Icon name="location-arrow" color="green" size={18}></Icon>
              <Text>32 m</Text>
              <Text>Location </Text>
              <Text>MELBOURNE</Text>
              <TouchableOpacity>
                <Text style={styles.readmoreText}>Read more ...</Text>
              </TouchableOpacity>
            </Body>
          </Left>
        </CardItem>
      </Card>
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
  },
  readmoreText: {
    textDecorationLine: 'underline',
    // color
    // fontSize
    // font
  }
});