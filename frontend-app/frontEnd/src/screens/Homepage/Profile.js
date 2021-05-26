import React, {useState, useEffect} from 'react';
import {
  Image,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {View, Text, Item, Icon, Button} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  Divider,
  Img,
  List,
  SignOut,
  UserName,
} from '../../Components/Home/profile/Profile';

import Colors from '../../constants/Color';

const Profile = ({navigation}) => {
  const imageWidth = useWindowDimensions().width;
  const imageHeight = Math.round(imageWidth * (1105 / 2004));
  const [name, setName] = useState()

  useEffect(async() => {
    const userName = await AsyncStorage.getItem('userData')
    setName(userName)
  }, [])

  const handleLogOut = async() => {
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('userData')
    if(await AsyncStorage.getItem('token') === null){
      console.log('no Token');
      navigation.navigate('Starter')
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: Colors.gray}}>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Img />
        <UserName name={name} />
      </View>
      <Divider />

      <ScrollView>
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 80,
            backgroundColor: Colors.gray,
          }}>
          <List iconType="Ionicons" iconName="search" listName="My Trips" />
          <List
            iconType="FontAwesome5"
            iconName="book"
            listName="My Bookings"
          />
          <Divider />
          {/* <Text style = {{color: Colors.dimGray, fontSize: 18}}>Explore</Text> */}
          <List
            iconType="FontAwesome5"
            iconName="hands-helping"
            listName="Travel Guides"
          />
          <List
            iconType="FontAwesome"
            iconName="heart-o"
            listName="Favourites"
          />
          <Divider />
          <List iconType="FontAwesome5" iconName="share-alt" listName="Share" />
          <List
            iconType="Feather"
            iconName="help-circle"
            listName="Help & Support"
          />
          <List
            iconType="Ionicons"
            iconName="settings-outline"
            listName="Settings"
          />
          <SignOut signOut={() => handleLogOut()} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
