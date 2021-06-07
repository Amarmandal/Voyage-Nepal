import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Icon, Button, CardItem, Body, Left, Thumbnail, Text, H3} from 'native-base';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Colors from '../../../constants/Color'

const Category = ({navigation}) => {
  const [position, setPosition] = useState({
    latitude: 28.200460390329287,
    longitude: 84.00785545598033,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  useEffect(async () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
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
        region={{
          latitude: 28.200460390329287,
          longitude: 84.00785545598033,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onRegionChangeComplete={region => setPosition(region)}>
        <Marker
          coordinate={{
            latitude: 28.200460390329287,
            longitude: 84.00785545598033,
          }}
          title={'Pokhara'}></Marker>
      </MapView>
      </View>
    </View>

    // <View>
    //   <Text>HEllo</Text>
    // </View>
  );
};

export default Category;
