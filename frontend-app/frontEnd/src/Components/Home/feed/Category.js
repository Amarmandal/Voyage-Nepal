import {View, Text} from 'react-native';
import React from 'react';
import {Content, ListItem, List, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../constants/Color';
import {useNavigation} from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  return (
    <Content padder style={{marginBottom: 30}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          marginBottom: 30,
          marginTop: 0,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="mountain" size={24} />
          <Text>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="mountain" size={24} />
          <Text>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="mountain" size={24} />
          <Text>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="mountain" size={24} />
          <Text>Adventure</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          marginBottom: 15,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="mountain" size={24} />
          <Text>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="mountain" size={24} />
          <Text>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="mountain" size={24} />
          <Text>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="mountain" size={24} />
          <Text>Adventure</Text>
        </View>
      </View>
      <View style={{marginRight: 20}}>
        <Text
          style={{
            textAlign: 'right',
            fontWeight: 'bold',
            color: Colors.themeColor,
          }}>
          View all
        </Text>
      </View>
    </Content>
  );
};

export default Category;
