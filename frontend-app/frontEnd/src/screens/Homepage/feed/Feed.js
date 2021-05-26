import React, {useState, useEffect} from 'react';
import {View, Text, PermissionsAndroid, Alert} from 'react-native';
import {HelloUser} from '../../../Components/Home/feed/Feed';
import {useSelector} from 'react-redux';
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';
import {Button} from 'native-base';

const Feed = () => {
  const state = useSelector(state => state.loginUser);
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
    error: null,
    location: null,
  });

  useEffect(() => {
     Geolocation.getCurrentPosition(
      position => {
        // console.log(position);
        const longitude = JSON.stringify(position.coords.longitude);
        const latitude = JSON.stringify(position.coords.latitude);
        setPosition({...position, longitude: longitude, latitude: latitude});
      },
      error => Alert.alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 10000,
      },
    );
  }, [])

  

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{margin: 20}}>
        <Text> Latitude: {position.latitude}</Text>
        <Text>Longitude: {position.longitude}</Text>
        {position.error ? <Text>Error: {position.error}</Text> : null}
        <HelloUser name={state.user.userData.name} />
      </View>
    </View>
  );
};

export default Feed;

