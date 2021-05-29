import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../../Screen/Home';
import Explore from '../../Screen/Explore';
import Hotel from '../../Screen/Hotel';
import Profile from '../../Screen/Profile';
import TabComponent from './Tab'

const Tab=createBottomTabNavigator();

const TabBar=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarButton: (props)=> <TabComponent label="Home" {...props}/>
                }}
            />
            <Tab.Screen name="Explore" component={Explore}
                 options={{
                    tabBarButton: (props)=> <TabComponent label="Explore" {...props}/>
                }}
            />
            <Tab.Screen name="Hotel" component={Hotel}
                 options={{
                    tabBarButton: (props)=> <TabComponent label="Hotel" {...props}/>
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                 options={{
                    tabBarButton: (props)=> <TabComponent label="Profile" {...props}/>
                }}
            />
        </Tab.Navigator>
    )
}

export default TabBar
