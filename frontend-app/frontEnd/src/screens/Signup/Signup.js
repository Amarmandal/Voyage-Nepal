import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View>
      <Text>Signup screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text>Signin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
