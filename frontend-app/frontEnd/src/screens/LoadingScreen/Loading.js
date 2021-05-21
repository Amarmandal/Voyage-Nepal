import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Colors from '../../constants/Color'
const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
      <ActivityIndicator color = {Colors.primary} size = 'large' />
    </View>
  );
};

export default Loading;
