import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';

import Signin from '../screens/Signin/Signin';
import Signup from '../screens/Signup/Signup';
import Feed from '../screens/Homepage/Feed';
import Explore from '../screens/Homepage/Explore';
import Category from '../screens/Homepage/Category';
import Map from '../screens/Homepage/Map';
import Profile from '../screens/Homepage/Profile';
import Starter from '../screens/starter/Starter';

const activeColor = '#CF3838'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: activeColor,
        showLabel: false,
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0, 
          height: 60
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{tabBarIcon: ({focused}) => <Icon name="home" size={26} style={{ color: focused ? activeColor : 'black' }} />}}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon type="MaterialIcons" name="explore" size={26} style={{ color: focused ? activeColor : 'black' }}/>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({focused}) => <Icon type="FontAwesome5" name="book" size={26} style={{ color: focused ? activeColor : 'black' }}/>,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              type='FontAwesome5'
              name="map-marked-alt"
              style={{ color: focused ? activeColor : 'black' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon type="FontAwesome5" name="user-circle" size={26} style={{ color: focused ? activeColor : 'black' }}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Starter"
          component={Starter}
          options={{
            title: 'Starter',
            headerStyle: {
              backgroundColor: '#1597bb',
            },
          }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            title: 'Signin',
            headerStyle: {
              backgroundColor: '#1597bb',
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: 'Signup',
            headerStyle: {
              backgroundColor: '#5eaaa8',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#5eaaa8',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
