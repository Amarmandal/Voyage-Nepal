import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Color from '../../../constants/Color'
import {useSelector} from 'react-redux'

const header=(props) =>{
    const state = useSelector(state => state.loginUser)
    return(
        <SafeAreaView >
        <View style={styles.container}>
                <View style={styles.headerText}>
                <Text style={styles.userName}>Hello, {state.user.userData.name}</Text>
                <Text style={styles.Greetings}>Good Morning</Text>
            </View>
               <Image source={require('../../../assets/pictures/face.jpg')} style={styles.userImage} />
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
       padding: 25,
       paddingTop: 35
    },
    headerText:{
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    
    },
    userName:{
        fontSize:25,
        fontWeight:'600',
        color:'#000000',
    },
    Greetings:{
        fontSize:18,
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