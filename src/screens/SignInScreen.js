/** SignInScreen.js */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Button, TextInput, TouchableOpacity, ScrollView, CheckBox } from 'react-native';
import fonts from '../assets/Fonts';
var fullWidth = Dimensions.get('window').width; //full width

// var FBLoginButton = require('../components/FBLoginButton');
// import TextInputComp from '../components/TextInputComp';
export default class SignInScreen extends Component {
  state = { fullname: "", password: "" }
	submitCheck() {
		const { fullname, password } = this.state
	}
	render() {
		return (
			<ScrollView contentContainerStyle={styles.contentContainer}>
   				<Text style={styles.screenTitle}>Sign In</Text>
   				<View style={styles.guildlineCont}>
	   				<Text style={styles.guildlineText}>Don't have a FinTipper account? </Text>
	   				<View style={styles.guildlineBtnCont}>
	   					<TouchableOpacity>
	   						<Text style={styles.guildlineBtn}>Register!</Text>
	   					</TouchableOpacity>
	   				</View>
   				</View>
   				
   				<View style={styles.hr} />
   				{/* <FBLoginButton /> */}
   				<View style={styles.dividerContainer}>
   					<View style={styles.hrWithText} />
   					<Text style={styles.dividerText}>OR</Text>
   					<View style={styles.hrWithText} />
   				</View>
{/*    				
				<TextInputComp id='Email' />
				<TextInputComp id='Password' />
		 */}
		
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* //FIXME: checkbox un-checkable */}
				  <CheckBox />
				<Text style={styles.instructions}>Remember me?</Text>
				</View>
				<Text style={styles.forgotpasswordBtn}>Forgot your password?</Text>
				<TouchableOpacity style={styles.btn_signin} onPress={() => submitCheck()} >
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
	hr: {	/* Divider */
    backgroundColor: '#d6d6d6',
    height: 2,
 		width: fullWidth-50,
     marginVertical: 30,
     borderRadius: 6
	}, /* Divder row container */
	dividerContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	hrWithText: {	/* Divider */
    backgroundColor: '#d6d6d6',
    height: 2,
 		width: 144,
 		marginVertical: 30,
    marginHorizontal: 24,
    borderRadius: 6     
	},
	dividerText: {
    fontSize: 16,
    fontFamily: fonts.LarsseitBold,
    letterSpacing: 2,
    fontWeight: '500',
    color: '#d6d6d6',
	},
	screenTitle: {
    fontSize: 22,
    fontFamily: fonts.RobotoBold,
    color: '#00d278',
    textAlign: 'center',
    margin: 24,
	},	/* Dont have an account?? */
	guildlineCont: {
		alignItems: 'center',
		paddingVertical: 6,
	},
	guildlineText: {
    fontSize: 20,
    fontFamily: fonts.Larsseit,
		color: 'black',
	}, /* register button container */
	guildlineBtnCont: {
		alignItems: 'center',
		justifyContent: 'center',
	}, /* register button */
	guildlineBtn: {
    fontSize: 20,
		color: '#00d278',
		textDecorationLine: 'underline',
	},
	instructions: {
    fontFamily: fonts.Larsseit,
		fontSize: 18,
		color: '#939393',
 		marginVertical: 16,
	},
	forgotpasswordBtn: {
    fontFamily: fonts.LarsseitBold,
		fontSize: 18,
		color: '#939393',
		textDecorationLine: 'underline',
 		// marginVertical: 12,
 		marginBottom: 20,
	},
	btn_signin: {
		width: 364,
		height: 64,
		marginVertical: 12,
		borderRadius: 8,
		paddingVertical: 18,
		backgroundColor: '#00d278',
	},
	btnText: {
    fontSize: 18,
    fontWeight: '700',
		// alignItems: 'flex-end',
    // justifyContent: 'center'
    fontFamily: fonts.LarsseitBold,
    color: '#ffffff',
    letterSpacing: 3,
    marginLeft: 10,
    textTransform: 'uppercase'
  }
});