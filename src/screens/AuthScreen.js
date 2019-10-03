/* AuthScreen.js */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import fonts from '../assets/Fonts';
import images from '../assets/Images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TermsFooter from '../../Components/TermsFooter';
var fullWidth = Dimensions.get('window').width; //full width

export default class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={images.fanTipperLogo} style={styles.logo}/>
        <Text style={styles.promptText}>The destination for giving {'\n'}and receiving tips online.</Text>
        <View style={styles.socialContBtn}>
          <FontAwesome.Button 
            name='facebook'
            size={22}
            // onPress={this._fbAuth}
            backgroundColor='transparent'
            paddingHorizontal={18}
            >
           <Text style={styles.btnText}>continue with facebook</Text>
          </FontAwesome.Button>
        </View>
        <View style={styles.socialContBtn}>
          <FontAwesome.Button 
            name='google'
            size={22}
            // onPress={this._fbAuth}
            backgroundColor='transparent'
            paddingHorizontal={18}
            >
           <Text style={styles.btnText}>continue with google</Text>
          </FontAwesome.Button>
        </View>
        <Text style={styles.noteText}>No automated posts</Text>
        <View style={styles.bottomBtnsContainer}>
		      <View style={styles.signRegBtn}>
		        <FontAwesome.Button 
		            name='unlock-alt'
		            size={22}
		            // onPress={this._fbAuth}
		            backgroundColor='transparent'
		            paddingHorizontal={18}
		            >
		          <Text style={styles.btnText}>sign in</Text>
		        </FontAwesome.Button>
	        </View>
	        <View style={styles.signRegBtn}>
		        <FontAwesome.Button 
		            name='plus'
		            size={22}
		            backgroundColor='transparent'
		            paddingHorizontal={18}
		            >
		          <Text style={styles.btnText}>register</Text>
		        </FontAwesome.Button>
	        </View>
      	</View>
      	<TermsFooter />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: '#303236',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
  },
  logo: {
    alignSelf: 'center', 
    resizeMode: 'contain',
    width: fullWidth-160
  },
  promptText: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 18,    
    color: '#ffffff',
    lineHeight: 26
  },
  noteText: {
    color: '#ffffff'
  },
  socialContBtn: {
    borderColor: '#ffffff', 
    borderWidth: 3, 
    borderRadius: 12,
    width: fullWidth-20,
    paddingVertical: 8,
    marginVertical: 6
  },
	bottomBtnsContainer: {
		alignItems: 'center',
		flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#ffffff',
    // borderWidth: 2,
    // marginVertical: 10,
		// marginHorizontal: 20,
		marginVertical: 20,
		// paddingHorizontal: 20,
	},
	signRegBtn: {
		backgroundColor: 'transparent',
		borderWidth: 3,
		borderRadius: 12,
		borderColor: '#ffffff',
		width: fullWidth/2-40,
		height: 60,
		// paddingHorizontal: 20,
    marginHorizontal: 16,
    // alignItems: 'center',
    justifyContent: 'center',
	},
	registerBtn: {
		backgroundColor: 'transparent',
		borderWidth: 4,
		borderRadius: 12,
		borderColor: '#ffffff',
		width: fullWidth/2-20,
		height: 70,
    marginHorizontal: 16,
	},
	btnText: {
		fontFamily: fonts.LarsseitBold,
    fontSize: 16,
    color: '#ffffff',
    letterSpacing: 3,
    textTransform: 'uppercase'
	}
})
