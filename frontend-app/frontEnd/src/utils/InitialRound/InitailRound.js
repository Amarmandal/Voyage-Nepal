import React from "react";
import {StyleSheet, View, Text} from 'react-native'

const InitialsRound = ({ initials, iHeight, iWidth, bgColor="#52c0b4" }) => (
  <View style={[styles.initialsRound, {height: iHeight, width: iWidth, backgroundColor: bgColor}]} ><Text>{initials}</Text></View>
);

export default InitialsRound;

const styles = StyleSheet.create({
    initialsRound: {
        borderRadius: 50,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})