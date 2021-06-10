import React, {useState, useEffect} from 'react';
import {SafeAreaView,Text, ScrollView} from 'react-native';
import {HelloUser} from '../../../Components/Home/feed/Feed';
import Header from '../../../Components/Home/feed/header'
import Popular from '../../../Components/Home/feed/Popular';
import SearchContainer from '../../../Components/Home/feed/searchContainer';

// import Geolocation from 'react-native-geolocation-service';
// import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
// import RNLocation from 'react-native-location';
import {Button} from 'native-base';
import api from '../../../services/ApiServices'
import {useDispatch, useSelector} from 'react-redux';
import {userDetails} from '../../../redux/action/Login/userDetails';
import {Category} from '../../../redux/action/Data/Category'

const Feed = () => {

  useEffect(() => {
    fetchDetails()
    fetchCategory()
  }, [])
  const state = useSelector(state => state.loginUser);

  const dispatch = useDispatch();

  const fetchCategory = async() => {
    var config = {
      method: 'get',
      url: '/categories',
    };
  
    await api(config)
      .then(res => {
        const cat = res.data.data;
        dispatch(Category(res.data.data)) 
        // console.log(res.data.data);  
      })
      .catch(err => {
        console.log(err);
      });

  }

  const fetchDetails = () => {
    var config = {
      method: 'get',
      url: `/user/user-details/${state.user.userData.id}`,
      headers: {
        Authorization: `Bearer ${state.user.token}`,
        Cookie: `token=${state.user.token}`,
      },
    };

    api(config)
    .then(res => {
      // console.log(res.data);
      dispatch(userDetails(res.data))
    })
    .catch(err => {
      console.log(err);
    })
  };


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

