import React, {useState, useEffect} from 'react';
import {Image, ScrollView} from 'react-native';
import {View, Text} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { WelcomeContainer} from '../../../Components/Home/feed/Feed'
import FormData from '../../../utils/formData'

const Feed = ({navigation}) => {
  const [name, setName] = useState()

  useEffect(async() => {
    // const userName = await AsyncStorage.getItem('userData')
    // // const firstName = userName.split(' ', 1)
    // setName(userName)
    const filledData = FormData({})
    const data = filledData.getData()
    console.log(data);
  }, [])
  const userName = AsyncStorage.getItem('userData')
  // setName(name)
  return (
    <ScrollView>
      {/* {userName} */}
      <WelcomeContainer user = {name} />
    </ScrollView>
  );
};

export default Feed;
