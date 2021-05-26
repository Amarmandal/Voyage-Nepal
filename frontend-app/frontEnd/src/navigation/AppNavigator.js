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
import Explore from '../screens/Homepage/Explore';
import Category from '../screens/Homepage/Category';
import Map from '../screens/Homepage/Map';
import Profile from '../screens/Homepage/Profile';
import Starter from '../screens/starter/Starter';
import Loading from '../screens/LoadingScreen/Loading';
import OTPScreen from '../screens/Signin/forgotPAssword/OTPScreen'
import Email from '../screens/Signin/forgotPAssword/Email'
import ResetPassword from '../screens/Signin/forgotPAssword/ResetPassword'
import Colors from '../constants/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const activeColor = '#CF3838';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
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
              style={{color: focused ? Colors.themeColor : 'black'}}
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
              size={26}
              style={{color: focused ? Colors.themeColor : 'black'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              type="FontAwesome5"
              name="book"
              size={26}
              style={{color: focused ? Colors.themeColor : 'black'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              type="FontAwesome5"
              name="map-marked-alt"
              style={{color: focused ? Colors.themeColor : 'black'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              type="FontAwesome5"
              name="user-alt"
              size={26}
              style={{color: focused ? Colors.themeColor : 'black'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
        {isLoading ? (
          <MainStack.Screen name="Loading" component={Loading} />
        ) : userToken !== null ? (
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
        ) : (
          <>
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
          </>
        )}
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
