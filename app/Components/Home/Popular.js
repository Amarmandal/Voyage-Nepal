import React from 'react'
import { FlatList,ScrollView, ImageBackground,Dimensions, SafeAreaView,StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors'
import places from '../../constants/places'
const {width}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons'


const Popular = ({navigation}) => {
const Card = ({place}) =>{
    return (
        <View style={styles.card}>
        
            <ImageBackground style={styles.cardImage} source={place.images}></ImageBackground>
            <View style={styles.cardDetails}>
             <Text style={styles.cardText}>{place.name}</Text> 
            <Text style={styles.location}>
             <Icon name="location-on" size={12} />
             {place.location} </Text>
             <View style={styles.ratings}>
                <Icon name="star" size={15} />
                <Icon name="star" size={15} />
                <Icon name="star" size={15} />
                <Icon name="star" size={15} />
                <Icon name="star-half" size={15} />
             </View>
            </View>

            
    
        </View>
    )
};

    return (
        <SafeAreaView style={{flex:1,paddingTop:10,backgroundColor:'white'}} >
        <ScrollView showsVerticalScrollIndicator={false}>
             <View>
            <Text style={styles.headingText}>Popular Destinations</Text>
        </View>
        <View>
             <FlatList
             horizontal 
             showsHorizontalScrollIndicator={false}
             data={places}
             renderItem={({item})=> <Card place={item} /> }
             />
        </View>

        <View>
              <View>
            <Text style={styles.recommendText}>Recommended For You</Text>
        </View>
        <View>
             <FlatList
             horizontal
             showsHorizontalScrollIndicator={false}
             data={places}
             renderItem={({item})=> <Card place={item} /> }
             />
        </View>
        </View>
              <View>
              <View>
            <Text style={styles.recommendText}>Recommended For You</Text>
        </View>
        <View>
             <FlatList
             horizontal
             showsHorizontalScrollIndicator={false}
             data={places}
             renderItem={({item})=> <Card place={item} /> }
             />
        </View>
        </View> 
        </ScrollView>
       
       
            
        </SafeAreaView>
    )
}

export default Popular

const styles = StyleSheet.create({
    headingText: {
        fontSize:22,
        color:Colors.themeColor,
        fontWeight: 'bold',
    },
    card:{
        height:250,
        width:width/1.8,
        padding:10,
        shadowColor:'#222',
        shadowOffset:{
            width:0,
            height:0,
        },
        shadowOpacity:0.2,
        shadowRadius:3,
        backgroundColor:'white',
        borderRadius:10,
        elevation:10,
        marginRight:8,
    },
    cardImage: {
        height:180,
        width:width/2,
        marginRight: 20,
        marginTop:10,
        padding:10,
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
    },
    recommendText:{
        fontSize:22,
        color:Colors.themeColor,
        marginTop:10,
        fontWeight: 'bold',
    },
    cardText:{
        color:'#000',
        fontSize:18,
        fontWeight:'bold',

    },
    cardDetails:{
        height:70,
        borderRadius:0,
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        padding:5,
        marginLeft:10,
        width:width/2,
        position:'absolute',
        justifyContent:'space-between',
        borderBottomColor:'black',

    },
    location:{
        
        fontSize:13,
    },
    ratings:{
        flexDirection:'row',
        
    }

})
