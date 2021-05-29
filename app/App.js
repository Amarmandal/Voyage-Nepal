import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import TabBar from './Components/TabBar/TabBar'
import Explore from './Screen/Explore'
import {enableScreen} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack'

const Stack= createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={TabBar} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App