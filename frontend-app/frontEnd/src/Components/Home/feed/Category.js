import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Content} from 'native-base';
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
          <Icon
            name="mountain"
            size={24}
            style={{
              backgroundColor: Colors.themeColor,
              padding: 12,
              borderRadius: 10,
            }}
          />
          <Text style={{marginTop: 8}}>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="mountain"
            size={24}
            style={{
              backgroundColor: Colors.themeColor,
              padding: 12,
              borderRadius: 10,
            }}
          />
          <Text style={{marginTop: 8}}>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="mountain"
            size={24}
            style={{
              backgroundColor: Colors.themeColor,
              padding: 12,
              borderRadius: 10,
            }}
          />
          <Text style={{marginTop: 8}}>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="mountain"
            size={24}
            style={{
              backgroundColor: Colors.themeColor,
              padding: 12,
              borderRadius: 10,
            }}
          />
          <Text style={{marginTop: 8}}>Adventure</Text>
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
          <Icon
            name="mountain"
            size={24}
            style={{
              backgroundColor: Colors.themeColor,
              padding: 12,
              borderRadius: 10,
            }}
          />
          <Text style={{marginTop: 8}}>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="mountain"
            size={24}
            style={{
              backgroundColor: Colors.themeColor,
              padding: 12,
              borderRadius: 10,
            }}
          />
          <Text style={{marginTop: 8}}>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="mountain"
            size={24}
            style={{
              backgroundColor: Colors.themeColor,
              padding: 12,
              borderRadius: 10,
            }}
          />
          <Text style={{marginTop: 8}}>Adventure</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="mountain"
            size={24}
            style={{
              backgroundColor: Colors.themeColor,
              padding: 12,
              borderRadius: 10,
            }}
          />
          <Text style={{marginTop: 8}}>Adventure</Text>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Explore')}>
        <View
          style={{
            marginRight: 20,
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: Colors.themeColor,
              backgroundColor: '#52c0b450',
              padding: 10,
              borderRadius: 8,
              paddingLeft: 15,
              paddingRight: 15,
            }}>
            View all
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </Content>
  );
};

export default Category;
