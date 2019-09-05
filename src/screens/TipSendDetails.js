/* TipSendDetails.js */
/* This screen is to enter Tip and payment Details */

import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, Image, Button, TextInput } from 'react-native';
import { ListItem, Body, Content, Card, CardItem } from 'native-base';
import RadioGroup from 'react-native-radio-buttons-group';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var fullWidth = Dimensions.get('window').width; //full width

var radio_props = [
  { label: 'param1', value: 0 },
  { label: 'param2', value: 1 },
];

export default class TipSendDetails extends Component {

  constructor () {
    super()
    this.state = {
      tipVaule1: [
        { label: '$2', value: 0 }, 
        { label: '$5', value: 1 },
        { label: '$10', value: 2 },
        { label: '$20', value: 3 },
      ],
      value1: 0,
      value1Index: 0,
    }
  }
  handleOnEndEdit() {

  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Content contentContainerStyle={{marginHorizontal: 10,}}>
            <View style={styles.receiverContainer}>
              <View style={styles.creatorIconContainer}>
                <Image
                  style={styles.creatorIcon}
                  source={require('../assets/images/userA/861.jpg')}/>
              </View>
              <View style={styles.creatorNameContainer}>
                <Text style={styles.creatorName}>
                    Send a FanTip to {"\n"}DJ Ash Millott
                </Text>
              </View>
            </View>
            <View style={{
              paddingVertical: 30, 
              borderBottomColor: '#d6d6d6',  
              borderBottomWidth: 1, 
              borderBottomEndRadius: 3, 
              // flex: 1
              }}
            >
              <View style={{}}>
                <Text style={styles.subtitleText}>How much would you like to tip?</Text>
              </View>
              <View style={{marginVertical: 20}}>
                <RadioForm formHorizontal={true} animation={true} ref="radioForm" >
                  {/* loop through the array of options to style radio buttons */}
                  {this.state.tipVaule1.map((obj, i) => {
                    var onPress = (value, index) => {
                      this.setState({
                        value1: value,
                        value1Index: index
                      })
                    }
                    return(
                      <RadioButton labelHorizontal={true} key={i} >
                        <RadioButtonInput
                          obj={obj}
                          index={i}
                          isSelected={this.state.value1Index === i}
                          onPress={onPress}
                          buttonInnerColor={'#00d278'}
                          buttonOuterColor={'#d6d6d6'}
                          buttonSize={12}
                          buttonOuterSize={28}
                          // buttonStyle={{}}
                          buttonWrapStyle={{marginRight: 10}}
                        />
                        <RadioButtonLabel 
                          obj={obj}
                          index={i}
                          onPress={onPress}
                          labelStyle={{
                            fontFamily: fonts.Larsseit, 
                            fontSize: 20,
                            color: '#1a1a1a',
                          }}
                          labelWrapStyle={{marginRight: 22}}
                        />
                      </RadioButton>
                    )
                  })}
                </RadioForm>
              </View>
              <View style={{borderColor: 'red', borderWidth: 0}}>
                <View>
                  <TextInput 
                    style={{ fontFamily: fonts.LarsseitBold, fontSize: 26, color: '#00d278', borderColor: '#00d278', backgroundColor: '#ffffff', borderWidth: 2, paddingVertical: 20, borderRadius: 8, marginBottom: 20, paddingHorizontal: 20, width: fullWidth - 50}} 
                    keyboardType='decimal-pad' 
                    onChangeText={(text) => this.setState({input: text})}
                    // onEndEditing={() => this.refs.radioForm.updateIsActiveIndex(0)}
                    defaultValue={this.state.tipVaule1[this.state.value1Index].label}
                    // value={}
                  />
                  <TextInput 
                    style={{ fontFamily: fonts.LarsseitThin, fontSize: 16, color: '#000000', borderColor: '#d6d6d6', backgroundColor: '#ffffff', borderWidth: 2, borderRadius: 8, marginBottom: 20, paddingHorizontal: 20, width: fullWidth - 50, height: 120}} 
                    keyboardType='default' 
                    multiline={true} 
                    placeholder='Leave a message of support (optional)...' 
                    placeholderTextColor='#6a6a6a' 
                  />
                </View>
              </View>
              </View>
                <View style={{paddingVertical: 30, borderBottomColor: '#d6d6d6',  borderBottomWidth: 1, borderBottomEndRadius: 3}}>
                  <Text style={styles.subtitleText2}>Payment Details</Text>
                  <View>
                    <TextInput style={{borderColor: '#d6d6d6', borderWidth: 2, borderRadius: 8, color: '#00d278', marginVertical: 20, backgroundColor: '#ffffff' }} keyboardType='default' placeholder='Name on card' placeholderTextColor='#6a6a6a'/>
                    <TextInput style={{borderColor: '#d6d6d6', borderWidth: 2, paddingVertical: 18, borderRadius: 8, fontSize: 14 }} keyboardType='decimal-pad' multiline={true} placeholder='Card number' placeholderTextColor='#6a6a6a' />
                  </View>
                </View>
                <View style={{paddingVertical: 30, borderBottomColor: '#d6d6d6',  borderBottomWidth: 1, borderBottomEndRadius: 3}}>
                  <Button title="Send $5 fantip!" color='#00d278'></Button>
                </View>
          </Content>
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
    backgroundColor: '#f5f5f5', // light-light-grey background
  },
  receiverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    // borderColor: 'red',
    // borderWidth: 2,
    borderBottomColor: '#d6d6d6', 
    borderBottomWidth: 1,
    borderBottomEndRadius: 3
  },
  creatorIconContainer: {
    marginHorizontal: 10,
  },
  creatorIcon: {
    height: 114, 
    width: 114, 
    borderRadius: 114 / 2,
  },
  creatorNameContainer: {
    marginHorizontal: 10,
    flex: 1,  // this 2 lines is to wrap the text that pushed out of screen due to flexDirection
    flexWrap: 'wrap'
  },
  creatorName: {
    fontFamily: fonts.LarsseitBold,
    color: '#00d278',
    fontSize: 24,
    lineHeight: 36,
  },
  subtitleText: { // how much tip amount 
    fontFamily: fonts.LarsseitBold,
    fontSize: 16,
    letterSpacing: 1.5,
    color: '#1a1a1a',
    lineHeight: 30,
    textTransform: 'uppercase'
  },
  subtitleText2: { // payment details
    fontFamily: fonts.LarsseitBold,
    fontSize: 16,
    letterSpacing: 1.5,
    color: '#8c8c8c',
    lineHeight: 30,
    textTransform: 'uppercase'
  }
});