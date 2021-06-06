import React, { Component } from 'react';
import {View,Text,Stylesheet, ScrollView} from 'react-native';
import Colors from '../../../constants/Color'
import Icon from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';

const Detail =(props)=>{
    const navigation = useNavigation();
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{margin: 20}}>
                <Text style={{fontSize: 22}}>{props.details}</Text>
            </View>
        </ScrollView>
    )
}

export default Detail
