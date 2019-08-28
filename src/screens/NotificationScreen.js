/* NotificationScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, Button } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class NotificationScreen extends Component {
  constructor () {
    super()
    this.state = {
      types1: [{label: 'param1', value: 0}, {label: 'param2', value: 1}],
      value1: 0,
      value1Index: 0,
      value1_1: 0,
      value1_1Index: 0,
      types2: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
      value2: 0,
      value2Index: 0,
      types3: [{label: '$1', value: 0}, {label: '$2', value: 1}, {label: '$20', value: 2},],
      value3: 0,
      value3Index: 0,
      // newInput: "",
      text: ''
    }
  }

  endEditing() {
    this.refs.radioFormForm.updateIsActiveIndex(0);

  }
  // handleOnChange() {
  //   () => this.refs.radioForm.updateIsActiveIndex(0);
  //   if (this.state.newInput!= '$2') {
  //     this.refs.radioForm.updateIsActiveIndex(0);
  //   }
  // }
  render() {
    return(
      <View style={styles.container}>
        <Text 
        style={{
          fontFamily: fonts.LarsseitBold,
          fontSize: 20,
          color: '#1a1a1a',
          textAlign: 'center',
          lineHeight: 30
          }}>
            NOTIFICATIONS COMING SOON!
        </Text>
        <ScrollView>
          <Text style={styles.welcome}>React Native Simple Radio Button Demo</Text>
          <Text style={styles.welcome}>1. Basic</Text>

          <View style={styles.component}>
            <RadioForm
              ref="radioForm"
              radio_props={this.state.types1}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={(value, index) => {
                this.setState({
                  value1:value,
                  value1Index:index
                })
              }}
            />
            {/* <Text>selected: {this.state.types1[this.state.value1Index].label}</Text> */}

            <Button
              style={{fontSize: 20, borderColor: '#2196f3', borderWidth: 2}} title="Force Update"
              onPress={() => this.refs.radioForm.updateIsActiveIndex(-1)}></Button>
          </View>

          <View style={styles.component}>
            <Text style={styles.welcome}>No initial set</Text>
            <RadioForm
              initial={-1}
              radio_props={this.state.types1}
              onPress={(value, index) => {
                this.setState({
                  value1_1:value,
                  value1_1Index:index
                })
              }}
            />
          </View>


          <Text style={styles.welcome}>2. Advanced</Text>
          <View style={styles.component}>
            <RadioForm
              formHorizontal={true}
              animation={true}
            >
              {this.state.types2.map((obj, i) => {
                var that = this;
                var is_selected = this.state.value2Index == i;
                return (
                  <View key={i} style={styles.radioButtonWrap}>
                    <RadioButton
                      isSelected={is_selected}
                      obj={obj}
                      index={i}
                      labelHorizontal={false}
                      buttonColor={'#2196f3'}
                      labelColor={'#000'}
                      style={[i !== this.state.types2.length-1 && styles.radioStyle]}
                      onPress={(value, index) => {
                        this.setState({value2:value})
                        this.setState({value2Index: index});
                      }}
                    />
                  </View>
                )
              })}
            </RadioForm>
            <Text>selected: {this.state.types2[this.state.value2Index].label}</Text>
          </View>

          <Text style={styles.welcome}>3. Pro</Text>
          <View style={styles.component}>
            <RadioForm formHorizontal={true} animation={true} ref="radioFormForm" >
              {this.state.types3.map((obj, i) => {
                var onPress = (value, index) => {
                    this.setState({
                      value3: value,
                      value3Index: index
                    })
                  }
                return (
                  <RadioButton labelHorizontal={true} key={i} >
                    {/* can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.value3Index === i}
                      onPress={onPress}
                      buttonInnerColor={'#f39c12'}
                      buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                      buttonSize={30}
                      buttonStyle={{}}
                      buttonWrapStyle={{marginLeft: 16}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      onPress={onPress}
                      labelStyle={{fontWeight: 'bold', color: '#2ecc71'}}
                      labelWrapStyle={{marginLeft: 10}}
                    />
                  </RadioButton>
                )
              })}
            </RadioForm>
            <Text>selected: {this.state.types3[this.state.value3Index].label}</Text>
            <TextInput 
              style={{ fontFamily: fonts.LarsseitBold, fontSize: 26, color: '#00d278', borderColor: '#00d278', borderWidth: 2, paddingVertical: 18, borderRadius: 8, marginVertical: 20, backgroundColor: '#ffffff', paddingHorizontal: 20}} 
              keyboardType='decimal-pad' 
              onChangeText={(text) => this.setState({text})}
              defaultValue={this.state.types3[this.state.value3Index].label}
              onEndEditing={() => this.endEditing()}
              // onEndEditing={this.handleOnChange}
              // onSubmitEditing={this.handleOnChange}
              // value={this.state.text}
            />
            <Text>{'user input: ' + this.state.text}</Text>
          </View>

        </ScrollView>
      </View>
    );
  }
}
//       </View>
//     );
//   }
// }

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
    marginTop: 20,
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  component: {
    alignItems: 'center',
    marginBottom: 50,
  },
  radioStyle: {
    borderRightWidth: 1,
    borderColor: '#2196f3',
    paddingRight: 10
  },
  radioButtonWrap: {
    marginRight: 5
  },
});