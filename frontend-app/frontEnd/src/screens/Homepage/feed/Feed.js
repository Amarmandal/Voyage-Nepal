import React, {useState, useEffect} from 'react';
import {SafeAreaView,Text, ScrollView} from 'react-native';
import Header from '../../../Components/Home/feed/header'
import Popular from '../../../Components/Home/feed/Popular';

import Geolocation from 'react-native-geolocation-service';
import {Button} from 'native-base';
import api from '../../../services/ApiServices'
import {useDispatch, useSelector} from 'react-redux';
import {userDetails} from '../../../redux/action/Login/userDetails';
import {Category} from '../../../redux/action/Data/Category'
import {Places} from '../../../redux/action/Data/places'
import { useIsFocused } from '@react-navigation/native';

const Feed = () => {

  useEffect(() => {
    fetchCategory()
    fetchPlaces()
  }, [])
  const state = useSelector(state => state.loginUser);
  const dispatch = useDispatch();

  const fetchCategory = async() => {
    var config = {
      method: 'get',
      url: '/categories',
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
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

  const fetchPlaces = async() => {
    var config = {
      method: 'get',
      url: '/places',
      headers: { 
        'Authorization': `Bearer ${state.user.token}`, 
        'Cookie': `token=${state.user.token}`
      }
    }

    await api(config)
    .then(res => {
      // console.log(res.data)
      // setDestinations(res.data)
      // return(res.data)
      dispatch(Places(res.data))
    })
    .catch(err => console.log(err))
  }



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

