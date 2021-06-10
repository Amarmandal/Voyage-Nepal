import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Icon, Button, CardItem, Body, Left, Thumbnail, Text, H3} from 'native-base';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Colors from '../../../constants/Color'
import Geocoder from 'react-native-geocoding';
import MapViewDirections from 'react-native-maps-directions';


const Category = ({navigation}) => {
  const [position, setPosition] = useState({
    latitude: 27.7172,
    longitude: 85.3240,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [pos, setPos] = useState({
    latitude: 27.7172,
    longitude: 85.3240,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  useEffect(async () => {
    Geocoder.init("AIzaSyDziZCJwC1dqy7vRGhVEyhWbnuSc0pTeAI");
    await Geocoder.from('Kathmandu')
    .then(json => {
			var location = json.results[0].geometry.location;
			// console.log(location.lat);
      setPos({...pos, latitude: location.lat, longitude: location.lng})
		})
		.catch(error => console.warn(error));

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
  }, []);
  return (
    <View style = {{backgroundColor: '#ffffff'}}>
      <View style = {{flexDirection: 'row', alignItems: 'center'}}>
      <Button transparent onPress = {() => navigation.jumpTo('Hotels')} large ><Icon name = 'arrow-back' style = {{color: '#52c0b4', fontSize: 25}} /></Button>
      <H3>Hotel Annapurna</H3>
      </View>
      <View>
      <CardItem bordered button onPress = {() => navigation.navigate('Map')}>
          <Left>
            <Thumbnail
              source={require('../../../assets/pictures/hotel1.png')}
              style={{
                width: 115,
                height: 115,
                marginLeft: -12,
                marginRight: 10,
                borderRadius: 0
              }}></Thumbnail>
            <Body>
              <Text style = {{fontSize: 22}}>Hotel Annapurna</Text>
              <Text note style = {{fontSize: 18}}>Kathmandu, Durbar Marg</Text>
              
                <View style = {{flexDirection: 'row'}}>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star-half-empty" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star-o" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                </View>
            </Body>
          </Left>
        </CardItem>
        <MapView
        provider={PROVIDER_GOOGLE}
        style = {{height: 455, width: 500, justifyContent: 'flex-end', alignItems: 'center'}}
        region={pos}
        >
        <Marker
          coordinate={{
            latitude: pos.latitude,
            longitude: pos.longitude,
          }}
          title={'Pokhara'}></Marker>
        <Marker
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
          title={'Kathmandu'}
          ></Marker>
        <MapViewDirections
        origin={position}
        destination={pos}
        apikey="AIzaSyDziZCJwC1dqy7vRGhVEyhWbnuSc0pTeAI"
        />
      </MapView>
      </View>
    </View>
  );
};

export default Category;
