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
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, Image
} from 'react-native';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

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

import Icon from 'react-native-vector-icons/FontAwesome';

import { createStore } from 'redux';
// const reducer = () => {

// }
// const store = createStore(reducer);
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
const AppDrawerNavigator = createDrawerNavigator ({
  history: {
    screen: HistoryScreen,
    navigationOptions: ({ navigation }) => ({
      title: `FanTip History`,
    }),
  },
  editProfile: {
    screen: EditProfileScreen,
  }
},
{
  unmountInactiveRoute: true,
  initialRouteName: 'editProfile',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange',
    }
  }
});
const AppBottomTabNavigator = createBottomTabNavigator ({
  notification: {
    screen: NotificationScreen,
    navigationOptions:{
      tabBarIcon: ({ focused, tintColor }) => {
        // const iconName = `calendar${focused ? '' : '-outline'}`;
        return <Icon name="bell" size={25} color={tintColor} />;
      },
      title: `Notification`,
    }
  },
  home: {
    screen: HomeScreen,
    navigationOptions:{
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="home" size={30} color={tintColor} />;
      },
      title: `Home`,
    }
  },
  offer: {
    screen: OfferScreen,
    navigationOptions:{
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="tags" size={25} color={tintColor} />;
      },
      title: `Offer`,
    }
  },
  drawer: {
    screen: AppDrawerNavigator,
  },
  menu: {
    screen: MenuScreen,
    navigationOptions:{
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="bars" size={25} color={tintColor} />;
      },
      title: `Menu`,
    }
  },
  message: {
    screen: MessageScreen,
    navigationOptions:{
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="envelope" size={25} color={tintColor} />;
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
  initialRouteName: 'home',
  order: [ 'notification', 'message', 'home', 'offer', 'menu', 'drawer' ],
  tabBarOptions: {
    showLabel: false,
    tintColor: '#626262',
    activeTintColor: '#00b96a',
    style : {
      backgroundColor: '#414042',
    },
    // TO-ADD-HERE: border line/ indicator(?)
    // indicatorStyle: {
    //   backgroundColor: 'red'
    // }
  }
});
// const SearchStack = createStackNavigator ({
//   search: SearchScreen
// })

const InitialStackNavigator = createStackNavigator ({
  AppBottomTabNavigator: AppBottomTabNavigator
}, {
  headerMode: "float",
  headerLayoutPreset: "center",
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
})
const AppStackNavigator = createStackNavigator({
  // home: Home,
  InitialStackNavigator,
  cards: Cards,
  search: SearchScreen,
  creator: CreatorScreen,
}, {
  headerMode: "none"
});

const AppContainer = createAppContainer(AppStackNavigator);