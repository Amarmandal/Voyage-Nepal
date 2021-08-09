import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, ScrollView, BackHandler, View, Alert} from 'react-native';
import Header from '../../../Components/Home/feed/header';
import Popular from '../../../Components/Home/feed/Popular';

import Geolocation from 'react-native-geolocation-service';
import {Button} from 'native-base';
import api from '../../../services/ApiServices';
import {useDispatch, useSelector} from 'react-redux';
import {userDetails} from '../../../redux/action/Login/userDetails';
import {Category} from '../../../redux/action/Data/Category';
import {Places} from '../../../redux/action/Data/places';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Carousel from '../../../Components/Home/feed/Swiper';
import RandomPlaces from '../../../Components/Home/feed/RandomPlaces';
// import {Paragraph, Dialog, Portal} from 'react-native-paper';
// import Alert from '../../../utils/Alert'

const Feed = () => {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    fetchCategory();
    fetchPlaces();
  }, []);
  const showDialog = () => setVisibility(true);

  const hideDialog = () => setVisibility(false);
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Voyage Nepal","Are you sure you want to exit the app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
      

      //   <Alert visibility = {visibility} hideDialog = {hideDialog} exitApp = {() => BackHandler.exitApp()}/>
      // return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
      // setVisibility(true),
      // visibility ? <Alert visibility = {visibility} hideDialog = {hideDialog} exitApp = {() => BackHandler.exitApp()}/> : null
    );

    return () => backHandler.remove();
  }, []);
  const state = useSelector(state => state.loginUser);
  const location = useSelector(state => state.currentLocation);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    var config = {
      method: 'get',
      url: `/categories/${state.user.userData.id}`,
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
    };

    await api(config)
      .then(res => {
        const cat = res.data.data;
        dispatch(Category(res.data.data));
        // console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
        dispatch(userDetails(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchPlaces = async () => {
    var config = {
      method: 'get',
      url: `/places/${state.user.userData.id}`,
      headers: {
        Authorization: `Bearer ${state.user.token}`,
        Cookie: `token=${state.user.token}`,
      },
    };

    await api(config)
      .then(res => {
        dispatch(Places(res.data));
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  const exitApp = () => {
    BackHandler.exitApp()
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Alert visibility = {visibility} hideDialog = {hideDialog} exitApp = {exitApp}/> */}
        <Header />
        <Carousel />
        <Popular />
        {!loading ? (
          <RandomPlaces />
        ) : (
          <Text style={{marginBottom: 60}}>Loading...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
