import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Signin = ({navigation}) => {
  return (
    <View>
      <Text>signin screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
