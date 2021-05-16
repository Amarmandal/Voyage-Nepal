import React from 'react'
import { Image, ImageBackground, useWindowDimensions } from 'react-native'
import { View, Text } from "native-base";

import feedStyles from './feed.styles'

export const HelloUser = () => {
    return (
        <View style={feedStyles.helloUSer}>
            <Text style = {feedStyles.userName}>Hello, Jane</Text>
            <Text style = {[feedStyles.userName, {fontSize: 26, fontFamily: 'KaushanScript-Regular', color: '#000000'}]}>Welcome to Nepal</Text>
        </View>
    )
}

export const UserImage = () => {
    return(
        <Image source = {require('../../../assets/pictures/face.jpg')} style = {feedStyles.userImg} />
    )
}

export const WelcomeContainer = () => {
    const imageWidth = useWindowDimensions().width;
  const imageHeight = Math.round(imageWidth * (1105 / 2004));
    return(
        <View style = {feedStyles.welcomeContainer}>
            <ImageBackground source = {require('../../../assets/pictures/bgMountains.jpg')} style = {{width: imageWidth, height: imageHeight}}>
            <HelloUser />
            <UserImage />
            </ImageBackground>
            
        </View>
    )
}
