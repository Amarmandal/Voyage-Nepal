import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../screens/Signin/Signin'
import Signup from '../screens/Signup/Signup'
import Home from '../screens/Homepage/Home'
import Starter from '../screens/starter/Starter';

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
