import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';

import Signin from '../screens/Signin/Signin';
import Signup from '../screens/Signup/Signup';
import Feed from '../screens/Homepage/Feed/Feed';
import Explore from '../screens/Homepage/Explore/Explore';
import HotelScreen from '../screens/HotelScreen';

import Profile from '../screens/Homepage/Profile/Profile';
import Starter from '../screens/starter/Starter';
import Colors from '../constants/Color'

const activeColor = Colors.green;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
          height: 60
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{tabBarIcon: ({focused}) => <Icon name="home" size={26} style={{ color: focused ? Colors.green : 'black' }} />}}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon type="MaterialIcons" name="explore" size={26} style={{ color: focused ? Colors.green : 'black' }}/>
          ),
        }}
      />
      <Tab.Screen
        name="HotelScreen"
        component={HotelScreen}
        options={{
          tabBarIcon: ({focused}) => <Icon type="Fontisto" name="hotel" size={26} style={{ color: focused ? Colors.green : 'black' }}/>,
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon type="FontAwesome5" name="user-alt" size={26} style={{ color: focused ? Colors.green : 'black' }}/>
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
