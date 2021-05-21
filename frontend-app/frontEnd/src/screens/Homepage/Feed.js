import React from 'react';
import {Image, ScrollView} from 'react-native';
import {View, Text} from 'native-base'

import { WelcomeContainer} from '../../Components/Home/feed/Feed'

const Feed = ({navigation}) => {
  return (
    <View>
      <WelcomeContainer />
    </View>
  );
};

export default Feed;