import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import Colors from '../../constants/Color'
import api from '../../services/ApiServices'
import { useIsFocused } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import { Recommended } from '../../redux/action/Data/recommended';
import {userDetails} from '../../redux/action/Login/userDetails';
import moment from 'moment'
const Loading = ({navigation}) => {

  const state = useSelector(state => state.loginUser);
  const detail = useSelector(state => state.userDetails)

  const [age, setAge] = useState(0)

  const dispatch = useDispatch()

  const [position, setPosition] = useState({
    latitude: 27.7172,
    longitude: 85.3240,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [recommended, setRecommended] = useState()

  const isFocused = useIsFocused();

  var today = new Date()

  const geoLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position);
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        setPosition({...position, longitude: longitude, latitude: latitude});
      },
      error => Alert.alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  }

  useEffect(async () => {
    await geoLocation()
    fetchRecommended()
  }, [isFocused]);

  const fetchRecommended = async () => {
    const userDOB = moment(detail.userDetail.DOB, 'YYYY/M/D');
    const userAge = moment().diff(userDOB, 'years')
    setAge(userAge)
    console.log(age)
    var data = JSON.stringify({
      "placename": "Bhimsen Tower (Dharhara)",
      "age": age,
      "x": position.latitude,
      "y": position.longitude
    });
    
    var config = {
      method: 'post',
      url: '/place/recommends',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${state.user.token}`, 
        'Cookie': `token=${state.user.token}`
      },
      data : data
    };
    
    api(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data.data));
      setRecommended(response.data.data)
      dispatch(Recommended(response.data.data))
      navigation.navigate('Home', {currentLocation: position})

    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
      <Image source = {require('../../assets/pictures/Logo.png')} style = {{width: 150, height: 150}} />
      <Text style = {{fontSize: 20, color: Colors.themeColor, marginTop: 20, fontWeight: 'bold'}}>Welcome to Voyage Nepal</Text>
    </View>
  );
};

export default Loading;
