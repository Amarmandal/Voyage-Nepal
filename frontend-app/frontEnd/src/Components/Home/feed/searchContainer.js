import React from 'react';
import {SafeAreaView, TextInput, StyleSheet, Text, View} from 'react-native';
import Colors from '../../../constants/Color';
// import Icon from 'react-native-vector-icons/MaterialIcons'
import {Item, Input, Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const SearchContainer = ({navigation}) => {
  return (
    <SafeAreaView style={{margin: 10, marginLeft: 25, marginRight: 25}}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#87f3e6', '#617170']}
        style = {{borderRadius: 25}}
        >
        <Item rounded>
        <Input placeholder="Select your destination" placeholderTextColor = '#ffffff'/>
        <Icon name="search" style={{color: '#ffffff'}} />
      </Item>
      </LinearGradient>
      
    </SafeAreaView>
  );
};

export default SearchContainer;
