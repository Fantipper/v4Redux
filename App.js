/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 /**
  * Stuff i need: 
  * search screen 
  * handshard logo + default profile pic
  */
import React, { Component } from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import AuthLoading from './src/screens/AuthLoading';

import HomeScreen from './src/screens/Home';
import Cards from './src/screens/Cards';
import NotificationScreen from './src/screens/NotificationScreen';
import OfferScreen from './src/screens/OfferScreen';
import MenuScreen from './src/screens/MenuScreen';
import MessageScreen from './src/screens/MessageScreen';

import SearchScreen from './src/screens/SearchScreen';
import CreatorScreen from './src/screens/CreatorScreen';

import EditProfileScreen from './src/screens/EditProfileScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import AboutScreen from './src/screens/AboutScreen';
import TermsScreen from './src/screens/TermsScreen';

import TipSendDetails from './src/screens/TipSendDetails';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createStore } from 'redux';

// const reducer = () => {

// }
// const store = createStore(reducer);
const HomeStack = createStackNavigator ({
  home: {
    screen: HomeScreen,
  },
  creator: {
    screen: CreatorScreen
  },
},
{
  headerMode: 'none'
});

const DrawerStackNavigator = createStackNavigator ({
  menuDrawer: {
    screen: MenuScreen,
  },
  history: {
    screen: HistoryScreen,
    navigationOptions: ({ navigation }) => ({
      title: `FanTip History`,
    }),
  },
  about: {
    screen: AboutScreen,
  },
  editProfile: {
    screen: EditProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Edit Profile`,
    }),
  }
},
{
  headerMode: 'none',
  initialRouteName: 'menuDrawer',
  defaultNavigationOptions: {
  }
});
const AppBottomTabNavigator = createBottomTabNavigator ({
  notification: {
    screen: NotificationScreen,
    navigationOptions:{
      tabBarIcon: ({ focused, tintColor }) => {
        // const iconName = `calendar${focused ? '' : '-outline'}`;
        return <Icon name='bell' size={25} color={tintColor} />;
      },
      title: `Notification`,
    }
  },
  homeStack: {
    // screen: HomeScreen,
    screen: HomeStack,
    navigationOptions:{
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name='home' size={30} color={tintColor} />;
      },
      title: `Home`,
    }
  },
  offer: {
    // screen: OfferScreen,
    screen: TipSendDetails,
    // screen: Cards,
    navigationOptions:{
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name='tags' size={25} color={tintColor} />;
      },
      title: `Offer`,
    }
  },
  menu: {
    screen: DrawerStackNavigator,
    // screen: MenuScreen,
    navigationOptions:{
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name='bars' size={25} color={tintColor} />;
      },
      title: `Menu`,
    }
  },
  message: {
    screen: MessageScreen,
    navigationOptions:{
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name='envelope' size={25} color={tintColor} />;
      },
      title: `Message`,
    }
  }
}, {
  // navigationOptions: ({ navigation }) => {
  //   const { routeName } = navigation.state.routes[navigation.state.index];
  //   return {
  //     headerTitle: routeName
  //   };
  // },
  initialRouteName: 'homeStack',
  order: [ 'notification', 'message', 'homeStack', 'offer', 'menu' ],
  tabBarOptions: {
    showLabel: false,
    tintColor: '#626262',
    activeTintColor: '#00b96a',
    style : {
      backgroundColor: '#414042',
    },
    // TODO: border line/ indicator(?)
    // indicatorStyle: {
    //   backgroundColor: 'red'
    // }
  }
});

const InitialStackNavigator = createStackNavigator ({
  AppBottomTabNavigator: AppBottomTabNavigator
}, {
  headerMode: 'float',
  headerLayoutPreset: 'center',
  defaultNavigationOptions: ({ navigation }) =>  {
    return {
      headerTitle: (
        <Image
          style={{ 
            alignSelf: 'center', 
            resizeMode: 'contain',
            height: 46, 
            width: 160
          }} 
          source={require('./src/assets/images/Logo_Green.png')}
        />
      ),
      headerRight: (
        <Icon
          name='search'
          size={30}
          color='#00d278'
          onPress={() => navigation.push('search')}
          style={{ marginRight: 20 }}
        >
        </Icon>
      ),
    }
  }
});

const AppStackNavigator = createStackNavigator({
  // home: Home,
  authLoading: AuthLoading,
  app: InitialStackNavigator,
  cards: Cards,
  search: SearchScreen,
  // creator: CreatorScreen,
}, {
  headerMode: 'none'
});

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}