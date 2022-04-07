import {View, Text, SafeAreaView} from 'react-native';
import Colors from '../../../../constants/Color';

import {Item, Input, Icon} from 'native-base';
import React from 'react';
import styles from '../Sponsorship/SponsorStyle';

const SponsorPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Item
        rounded
        style={{
          marginLeft: 20,
          marginRight: 25,
          marginBottom: 20,
          marginTop: 30,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <Input placeholder="Search your destination" />
        <Icon name="search" style={{color: Colors.gray}} size={28} />
      </Item>
      <View>
        <Text
          style={{
            color: Colors.themeColor,
            margin: 20,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Your Advertisements
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SponsorPage;
