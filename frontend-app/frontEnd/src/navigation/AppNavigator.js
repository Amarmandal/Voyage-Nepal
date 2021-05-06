import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../screens/Signin/Signin'
import Signup from '../screens/Signup/Signup'
import Home from '../screens/Homepage/Home'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#1597bb',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              alignSelf: 'center'
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
