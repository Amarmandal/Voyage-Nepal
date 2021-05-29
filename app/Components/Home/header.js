import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Color from '../../constants/colors'

const header=(props) =>{
    return(
        <SafeAreaView >
        <View style={styles.container}>
                <View style={styles.headerText}>
                <Text style={styles.userName}>Hello Jane</Text>
                <Text style={styles.Greetings}>Good Morning</Text>
            </View>
               <Image source={require('../../assets/pictures/face.jpg')} style={styles.userImage} />
        </View>


            
            
        </SafeAreaView>
    )
}

export default header

const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',  
    },
    headerText:{
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    
    },
    userName:{
        fontSize:30,
        fontWeight:'700',
        color:Color.themeColor,
    },
    Greetings:{
        fontSize:20,
        fontWeight:'500',
        color:Color.dimGray,
    },
    userImage:{
        alignSelf: 'flex-end',
        width:80,
        height:80,
        borderRadius:50,
        overlayColor:'transparent',
 
    }
})
