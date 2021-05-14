import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Feed = ({navigation}) => {
  return (
    <View>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text>Signin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feed;
