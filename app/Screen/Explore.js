import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import TravelList from '../Components/Explore/TravelList'

const Explore = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, padding:20,backgroundColor:'white'}}>
            <TravelList />
        </SafeAreaView>
    )
}

export default Explore

const styles = StyleSheet.create({})
