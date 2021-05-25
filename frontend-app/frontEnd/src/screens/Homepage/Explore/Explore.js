import React from 'react';
import {View,Text,Dimensions,Image,TextInput} from 'react-native';
import {SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import {Flatlist,TouchableOpacity} from 'react-native-gesture-handler';
import FeedStyle from './ExploreStyle'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons'
import COLOR from '../../../constants/Color'


MaterialIcons.loadFont();


const Explore=()=>{
    
        /* const renderPlaces=({items})=>{
            return(
                <TouchableOpacity>
                    <ImageBackground 
                    source={item.image}
                    style={FeedStyle.PlaceItem}
                    imageStyle={FeedStyle.PlaceItemImage}
                    >
                    <View style={styles.PlaceItemLocationWrapper}>
                    <MaterialIcons name="location-on" size={18} color={COLOR.white} />
                    <Text style={FeedStyle.PlaceItemText}>
                        {item.name}
                    </Text> 
                    </View>
                    </ImageBackground>
                </TouchableOpacity>
            )
        } */

    return(
        <SafeAreaView style={FeedStyle.container}>
             <View style={FeedStyle.header}>
             <View style={{paddingBottom:15}}>
                 <Text style={FeedStyle.headerText}>Find your next trip</Text>
             </View>
             <View style={{flexDirection:'row'}}>
                 <Text style={FeedStyle.NextText}>Explore Destinations</Text>
             </View> 
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={FeedStyle.SearchInput}>
            <View style={FeedStyle.InputContainer}>
                <Icon name="search" size={20} style={{marginLeft:20}}/>
                <TextInput placeholder="Search" 
                style={{fontSize:18, paddingLeft:10}}/>
            </View>
                <View style={FeedStyle.sort}></View>
            </View>

           {/*  <View style={FeedStyle.PlaceWrapper}>
                <Flatlist
                    data={places}
                    renderItem={renderPlaces}
                    keyExtractor={(item) =>item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View> */}
            
            
        </ScrollView>
        </SafeAreaView>
       
    )
}

export default Explore;