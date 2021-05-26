import React from 'react';
import {View,Text,Dimensions,Image,TextInput} from 'react-native';
import {SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import {Flatlist,TouchableOpacity} from 'react-native-gesture-handler';
import FeedStyle from './ExploreStyle'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons'
import COLOR from '../../../constants/Color'


// MaterialIcons.loadFont();


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
        <View>
            <Text>Explore here</Text>
        </View>

       
    )
}

export default Explore;