import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TravelList from '../../../Components/Home/Explore/TravelList';
import axios from 'axios';

// MaterialIcons.loadFont();

const Explore = ({navigation}, props) => {
  
  // useEffect(() => {
  //   var config = {
  //     method: 'get',
  //     url: 'http://10.0.2.2:8080/api/categories',
  //     headers: {},
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TravelList />
    </SafeAreaView>
  );
};

export default Explore;
