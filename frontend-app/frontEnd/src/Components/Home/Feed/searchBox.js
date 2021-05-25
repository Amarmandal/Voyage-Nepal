 import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

import {TextInput} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SearchBox() {
  return (
    <View
      style={Styles.Container}>
      <View
        style={Styles.ViewBox}>
         
        <MaterialCommunityIcons name="map-search" color={'grey'} size={20} />
      </View>
      <TextInput
        style={Style.TextStyle}
        placeholder={'Search for destinations'}
      />
    </View>
  );
} 

const Styles=StyleSheet.create({
	Container:{
		flexDirection: 'row',
        	alignItems: 'center',
       	shadowColor: '#000',
        	shadowOffset: {
          	width: 0,
          	height: 2,
		shadowOpacity: 0.23,
        	shadowRadius: 2.62,
        	elevation: 4,
			},

		ViewBox:{	
          elevation: 1,
          position: 'absolute',
          left: 20,
        
			},

		TextStyle:{
		height: 50,
          marginHorizontal: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 10,
          paddingLeft: 50,
          flex: 1,
}
})
