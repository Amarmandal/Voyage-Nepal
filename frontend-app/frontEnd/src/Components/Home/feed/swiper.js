import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-navigation'

const swiper = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
                 <View style={styles.sliderContainer}>
         <Swiper height={210} autoplay>
            <View style={styles.slide}>
            <Image 
                source={require('../../assets/pictures/Explore_image/PhewaLake.jpg')}
                resizeMode='cover'
                style={styles.sliderImage}
            />
        </View>
        <View style={styles.slide}>
            <Image 
                source={require('../../assets/pictures/Explore_image/Chandragiri.jpg')}
                resizeMode='cover'
                style={styles.sliderImage}
            />
        </View>
        <View style={styles.slide}>
            <Image 
                source={require('../../assets/pictures/Explore_image/Swayambhunath.jpg')}
                resizeMode='cover'
                style={styles.sliderImage}
            />
        </View>
         </Swiper>
            
    
        </View>
       
        </SafeAreaView>
       
        
    )
}

export default swiper

const styles = StyleSheet.create({
    sliderContainer: {
       height:220,
       marginTop:20,
       justifyContent: 'center',
       alignSelf:'center',

    },
    slide:{
        flex:1,
        justifyContent: 'center',
        backgroundColor:'transparent',
    },
    sliderImage:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        borderRadius:10,
    }

})
