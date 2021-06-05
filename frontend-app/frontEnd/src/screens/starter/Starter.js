import React from 'react';
import {Image, ScrollView, TouchableOpacity, useWindowDimensions} from 'react-native';
import {Text, Button, View, Icon} from 'native-base';
import Colors from '../../constants/Color';

const Starter = ({navigation}) => {
  const width = useWindowDimensions().width
  const height = Math.round(width * 251/458);
  return (
    <View style={{display: 'flex', flex: 1}}>
      <View>
        <Image
          source={require('../../assets/pictures/start.png')}
          style={{marginTop: 60, width: width, height: height}}/>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                color: '#000000',
                fontSize: 20,
                fontWeight: '700',
                top: '-100%',
                marginLeft: 250,
                color: Colors.themeColor
              }}>
              Voyage Nepal
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 40,
                fontWeight: 'bold',
                marginTop: 90,
                marginBottom: 20,
                color: Colors.themeColor
              }}>
              Let's Travel
            </Text>
            <View padder>
              <View style={{ alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Signin');
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.themeColor,
                    padding: 10,
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                  }}>
                  <Icon
                    type="AntDesign"
                    name="forward"
                    style={{fontSize: 30, color: '#ffffff', padding: 1}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        
      </View>
    </View>
  );
};

export default Starter;
