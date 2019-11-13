/** SignInScreen.js */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Button, TextInput, TouchableOpacity, ScrollView, CheckBox } from 'react-native';
import fonts from '../assets/Fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var fullWidth = Dimensions.get('window').width; //full width

// var FBLoginButton = require('../components/FBLoginButton');
// import TextInputComp from '../components/TextInputComp';
export default class SignInScreen extends Component {
	constructor() {
		super();
		this.state = { email: "", password: "", check: false }
	};
	static defaultProps = {
	  value: '',
	  id: ''
	  // isFocused: false,
	}
	onChangeText(value) {
		this.setState({ email: value });
	}
	_submitCheck() {
		const { email, password } = this.state
	};
	_handleCheckBox() {
		this.setState({ check: !this.state.check })
		//TODO: make it remember the user
	};
	_handleSignIn() {
		// TODO:
	}
	render() {
		return (
			<ScrollView contentContainerStyle={styles.contentContainer}>
   				<Text style={styles.screenTitle}>Sign In</Text>
   				<View style={styles.guildlineCont}>
	   				<Text style={styles.guildlineText}>Don't have a FanTipper account?</Text>
	   				<View style={styles.toRegisterBtnCont}>
	   					<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
	   						<Text style={styles.toRegisterBtn}>Register!</Text>
	   					</TouchableOpacity>
	   				</View>
					</View>
   				<View style={styles.hr} />
					 {/* <FBLoginButton /> */}
					 <View style={styles.socialBtnsContainer}>
						<View style={[styles.btn_social, styles.btn_fb]}>
							<FontAwesome.Button 
								name='facebook-square'
								size={30}
								backgroundColor='#3b5998'
								// color="#3b5998"
								paddingHorizontal={18}
								iconStyle={{marginRight:10}}
								style={{marginHorizontal: 10}}
								// onPress={this._fbAuth}
								>
							<Text style={styles.btnText}>sign in with facebook</Text>
							</FontAwesome.Button>
						</View>
						<View style={styles.btn_social}>
							<FontAwesome.Button 
								name='google'
								size={30}
								backgroundColor='#FFFFFF'
								color='#939393'
								paddingHorizontal={18}
								iconStyle={{marginRight:10}}
								style={{marginHorizontal: 10}}
								// onPress={this._fbAuth}
								>
							<Text style={[styles.btnText, styles.btnText_google]}>sign in with google</Text>
							</FontAwesome.Button>
						</View>
					</View>{/* {÷} */}
   				<View style={styles.hrOrContainer}>
   					<View style={styles.hrOR} />
   					<Text style={styles.hrOrText}>OR</Text>
   					<View style={styles.hrOR} />
   				</View>
					<TextInput />
					<Text>email: {this.state.email}</Text>
					<Text>password: {this.state.password}</Text>
{/*    				
				<TextInputComp id='Email' />
				<TextInputComp id='Password' />
		 */}

		 			<TextInput 
						placeholder='Email'
						placeholderTextColor='#6a6a6a'
						autoCapitalize='none'
						value={this.state.email}
						maxLength={40}
						// selectionColor='#00d278'
						// selectTextOnFocus={false}
						editable={true}
						// onFocus={(e) => this.onFocus(e)}
						// onBlur={(e) => this.onBlur(e)}
						keyboardType='email-address'
						onChangeText={(email) => this.setState({ email })}
						// onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
						style={{
							width: fullWidth-40,
							height: 52,
							backgroundColor: 'white',
							borderColor: '#d6d6d6',
							borderRadius: 8,
							borderWidth: 2,
							fontFamily: fonts.Larsseit,
							fontSize: 18,
							marginVertical: 6,
							paddingHorizontal: 26,
						}}
					/>
					<TextInput 
						placeholder='Password'
						placeholderTextColor='#6a6a6a'
						value={this.state.password}
						maxLength={40}
						editable={true}
						secureTextEntry={true}
						password={true}
						keyboardType='default'
						onChangeText={(password) => this.setState({ password })}
						onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
						style={{
							width: fullWidth-40,
							height: 52,
							backgroundColor: 'white',
							borderColor: '#d6d6d6',
							borderRadius: 8,
							borderWidth: 2,
							fontFamily: fonts.Larsseit,
							fontSize: 18,
							marginVertical: 6,
							paddingHorizontal: 26,
						}}
					/>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
				  <CheckBox value={this.state.check} onChange={() => this._handleCheckBox()} />
					<Text style={styles.instructions}>Remember me?</Text>
				</View>
				<Text style={styles.forgotpasswordBtn}>Forgot your password?</Text>
				<TouchableOpacity style={styles.btn_signin} onPress={this._handleSignIn} >
					<Text style={styles.btnText}>SIGN IN!</Text>
				</TouchableOpacity>
			</ScrollView>
		)
	}
}
const styles = StyleSheet.create ({
	contentContainer: {
		backgroundColor: '#f5f5f5',
		paddingVertical: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	hr: {
    backgroundColor: '#d6d6d6',
    height: 2,
 		width: fullWidth-50,
 		marginVertical: 30,
	}, 
	hrOrContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	hrOR: {
    backgroundColor: '#d6d6d6',
    height: 2,
		width: (fullWidth-100)/2,
		marginVertical: 30,
		marginHorizontal: 10
	},
	hrOrText: {
    fontSize: 16,
    fontFamily: fonts.LarsseitBold,
    letterSpacing: 2,
    fontWeight: '500',
    color: '#d6d6d6'
	},
	screenTitle: {
    fontSize: 22,
    fontFamily: fonts.RobotoBold,
    color: '#00d278',
    textAlign: 'center',
    margin: 24
	},	/* Dont have an account?? */
	guildlineCont: {
		alignItems: 'center',
		paddingVertical: 6,
	},
	guildlineText: {
    fontSize: 20,
    fontFamily: fonts.Larsseit,
		color: 'black'
	}, /* register button container */
	toRegisterBtnCont: {
		alignItems: 'center',
		justifyContent: 'center',
	}, /* register button */
	toRegisterBtn: {
    fontSize: 20,
		color: '#00d278',
		textDecorationLine: 'underline'
	}, /* social media buttons */
	socialBtnsContainer: {
    alignItems: 'center',
    marginVertical: 6
  },
  btn_social: {
		borderColor: '#ffffff', 
		backgroundColor: '#ffffff',		
    borderWidth: 3, 
    borderRadius: 12,
    width: fullWidth-40,
    paddingVertical: 6,
		marginVertical: 8,
		borderBottomColor: '#939393'
  },
  btn_fb: {
		borderColor: '#3b5998',
		backgroundColor: '#3b5998'
	},
	btnText_google: {
		color: '#939393'
	},
	instructions: {
    fontFamily: fonts.Larsseit,
		fontSize: 18,
		color: '#939393',
 		marginVertical: 16
	},
	forgotpasswordBtn: {
    fontFamily: fonts.Larsseit,
		fontSize: 18,
		color: '#939393',
		textDecorationLine: 'underline',
 		marginBottom: 20
	},
	btn_signin: {
    width: fullWidth-40,
		height: 64,
		marginVertical: 12,
		borderRadius: 8,
		paddingVertical: 18,
		backgroundColor: '#00d278'
	},
	btnText: {
    fontSize: 18,
    fontWeight: '700',
		textAlign: 'center',
    fontFamily: fonts.LarsseitBold,
    color: '#ffffff',
    letterSpacing: 3,
    marginLeft: 10,
    textTransform: 'uppercase'
  }
});