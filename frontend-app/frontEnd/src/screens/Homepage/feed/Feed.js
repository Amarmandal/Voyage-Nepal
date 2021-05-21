import React, {useState, useEffect} from 'react';
import {Image, ScrollView} from 'react-native';
import {View, Text} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { WelcomeContainer} from '../../../Components/Home/feed/Feed'

const Feed = ({navigation}) => {
  const [name, setName] = useState()

  useEffect(async() => {
    const userName = await AsyncStorage.getItem('userData')
    const firstName = userName.split(' ', 1)
    setName(firstName)
  }, [])
  return (
    <ScrollView>
      <WelcomeContainer user = {name} />
    </ScrollView>
  );
};

export default Feed;
