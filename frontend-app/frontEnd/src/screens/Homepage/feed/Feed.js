import React, {useState, useEffect} from 'react';
import {SafeAreaView,Text, ScrollView} from 'react-native';
import {HelloUser} from '../../../Components/Home/feed/Feed';
import {useSelector} from 'react-redux';
import Header from '../../../Components/Home/feed/header'
import Popular from '../../../Components/Home/feed/Popular';
import SearchContainer from '../../../Components/Home/feed/searchContainer';

// import Geolocation from 'react-native-geolocation-service';
// import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
// import RNLocation from 'react-native-location';
import {Button} from 'native-base';

const Feed = () => {
  const state = useSelector(state => state.loginUser);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
    <ScrollView showsVerticalScrollIndicator={false}>
     <Header/>
       <Popular />
    </ScrollView>

    </SafeAreaView>
  );
};

export default Feed;

