import React from 'react';
import {ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import {Text, Button, View, Icon} from 'native-base';
import Colors from '../../constants/Color';

const Starter = ({navigation}) => {
  return (
    <View style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <View>
        <ImageBackground
          source={require('../../assets/pictures//boarding.jpg')}
          style={{width: '100%', height: '100%'}}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 75,
                fontWeight: '200',
                fontFamily: 'GentiumBookBasic-Bold',
              }}>
              Voyage Nepal
            </Text>
            <View padder style={{top: '33%'}}>
              <View style={{marginTop: 120, alignItems: 'center'}}>
                <Text
                  style={{fontSize: 30, fontWeight: '700', color: '#ffffff', marginBottom: 10}}
                  uppercase={false}>
                  Let's Travel
                </Text>
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
        </ImageBackground>
      </View>
    </View>
  );
};

export default Starter;
