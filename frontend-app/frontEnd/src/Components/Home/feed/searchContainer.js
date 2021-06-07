import React from 'react';
import {SafeAreaView, TextInput, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../constants/Color';
// import Icon from 'react-native-vector-icons/MaterialIcons'
import {Item, Input, Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const SearchContainer = ({navigation}) => {
  return (
    <SafeAreaView style={{margin: 10, marginLeft: 25, marginRight: 25}}>
       
        <Item rounded>
        <Input placeholder="Select your destination" />
        <Icon name="search" style={{color: Colors.gray}} />
      </Item>
      
      
    </SafeAreaView>
  );
};

export default SearchContainer;
