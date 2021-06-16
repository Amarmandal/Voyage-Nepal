import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Color from '../../../constants/Color'
import {useSelector} from 'react-redux'

const header=(props) =>{
    const state = useSelector(state => state.loginUser)
    const detail = useSelector(state => state.userDetails);
    var myDate = new Date();
    var hrs = myDate.getHours();
    return(
        <SafeAreaView >
        <View style={styles.container}>
                <View style={styles.headerText}>
                <Text style={styles.userName} >Hello, {state.user.userData.name}</Text>
                <Text style={styles.Greetings}>{hrs < 12 ? 'Good Morning!' : (hrs >= 12 && hrs <= 17) ? 'Good Afternoon!' : 'Good Evening!'}</Text>
            </View>
                
               <Image source={{uri: detail.userDetail.profileImgURL}} style={styles.userImage} />
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
        fontSize:22,
        fontWeight:'bold',
        color:'#000000',
    },
    Greetings:{
        fontSize:16,
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
