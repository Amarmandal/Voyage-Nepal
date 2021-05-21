import React from 'react';
import {Image, ScrollView} from 'react-native';
import {View, Text} from 'native-base'

import { WelcomeContainer} from '../../../Components/Home/feed/Feed'

const Feed = ({navigation}) => {
  return (
    <ScrollView>
      <WelcomeContainer />
    </ScrollView>
  );
};

export default Feed;
