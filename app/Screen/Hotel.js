import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import HotelDetail from '../Components/Hotel/hotelDetail'

const Hotel = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1, padding:20}}>
            <HotelDetail />
        </SafeAreaView>
    )
}

export default Hotel;

const styles = StyleSheet.create({})