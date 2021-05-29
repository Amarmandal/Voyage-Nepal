import React from 'react'
import { SafeAreaView,TextInput,StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'



const SearchContainer = ({navigation}) => {
    return (
        <SafeAreaView >
         <View style={styles.Container}> 
         <TextInput placeholder='Select your destination' style={styles.SearchText} /> 
         <View style={styles.searchIcon}>
            <Icon name="search" size={28} style={{color:Colors.themeColor}} />
         </View>
         
         </View> 
        </SafeAreaView>
    )
}

export default SearchContainer

const styles = StyleSheet.create({
    Container: {
        marginTop:15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius:3,
        alignItems: 'center',
        justifyContent:'space-between',
        height:40,
       
       
    },
    SearchText: {
        fontSize:16,
        paddingLeft:10,

    },
    searchIcon:{
        backgroundColor:'white',
        alignItems: "center",
        justifyContent: "center",
        marginRight:5,
    }
})
