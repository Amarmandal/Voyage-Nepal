import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, createSw} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';

import Signin from '../screens/Signin/Signin';
import Signup from '../screens/Signup/Signup';
import Feed from '../screens/Homepage/feed/Feed';
import Explore from '../screens/Homepage/explore/Explore';
import HotelScreen from '../screens/Homepage/hotelScreen/HotelScreen';
import Map from '../screens/Homepage/hotelScreen/Map';
import Profile from '../screens/Homepage/ProfileScreen/Profile';
import AboutMe from '../screens/Homepage/ProfileScreen/AboutMe';
import Starter from '../screens/starter/Starter';
import Loading from '../screens/LoadingScreen/Loading';
import OTPScreen from '../screens/Signin/forgotPAssword/OTPScreen';
import Email from '../screens/Signin/forgotPAssword/Email';
import ResetPassword from '../screens/Signin/forgotPAssword/ResetPassword';
import Colors from '../constants/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const activeColor = '#CF3838';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Maps = createBottomTabNavigator();
const AccountStack = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.green,
        inactiveTintColor: Colors.dimGray,
        showLabel: false,
        style: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={26}
              style={{color: focused ? Colors.themeColor : Colors.dimGray}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              type="MaterialIcons"
              name="explore"
              size={29}
              style={{color: focused ? Colors.themeColor : Colors.dimGray}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HotelScreen"
        component={HotelMapScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              type="Fontisto"
              name="hotel"
              size={26}
              style={{color: focused ? Colors.themeColor : Colors.dimGray}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              type="FontAwesome5"
              name="user-alt"
              size={26}
              style={{color: focused ? Colors.themeColor : Colors.dimGray}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function HotelMapScreen() {
  return (
    <Maps.Navigator>
      <Maps.Screen name="Hotels" component={HotelScreen} />
      <Maps.Screen name="Map" component={Map} />
    </Maps.Navigator>
  );
}

function AccountScreen(){
  return(
    <AccountStack.Navigator>
      <AccountStack.Screen name = 'Account' component = {Profile} />
      <AccountStack.Screen name = 'About me' component = {AboutMe} />
      {/* <AccountStack.Screen /> */}
    </AccountStack.Navigator>
  )
}

function MainStackScreen() {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      setUserToken(token);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen
        name="Starter"
        component={Starter}
        options={{
          title: 'Starter',
          headerStyle: {
            backgroundColor: '#1597bb',
          },
        }}
      />
      <MainStack.Screen
        name="Signin"
        component={Signin}
        options={{
          title: 'Signin',
          headerStyle: {
            backgroundColor: '#1597bb',
          },
        }}
      />
      <MainStack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: 'Signup',
          headerStyle: {
            backgroundColor: '#5eaaa8',
          },
        }}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#5eaaa8',
          },
        }}
      />
    </MainStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Email" component={Email} />
        <RootStack.Screen name="MyModal" component={OTPScreen} />
        <RootStack.Screen name="Reset" component={ResetPassword} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
