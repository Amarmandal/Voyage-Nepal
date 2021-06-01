import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TravelList from '../../../Components/Home/Explore/TravelList'


// MaterialIcons.loadFont();


const Explore=()=>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <TravelList />
        </SafeAreaView>
       
    )
}

export default Explore;