import React, {useState, useEffect} from 'react';
import {
  Image,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {
  View,
  Text,
  Item,
  Icon,
  Button,
  H1,
  Content,
  Right,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SignOut} from '../../../Components/Home/profile/Profile';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import api from '../../../services/ApiServices'

import Colors from '../../../constants/Color';

const Profile = ({navigation}) => {
  const state = useSelector(state => state.loginUser);
  const detail = useSelector(state => state.userDetails)

  const imageWidth = useWindowDimensions().width;
  const imageHeight = Math.round(imageWidth * (1105 / 2004));
  const [name, setName] = useState();

  useEffect(async () => {
    console.log(detail);
    if(detail.userDetail.photo){
      console.log(detail.userDetail);
    }
    const userName = await AsyncStorage.getItem('userData');
    setName(userName);
  }, []);

  const token = state.user.token

  var config = {
    method: 'get',
    url: `/user/${state.user.userData.id}/signout`,
    headers: {
      'Authorization': `'Bearer' ${state.user.token}`
  }

  };

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('token');
    api(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigation.navigate('Signin')
      })
      .catch(function (error) {
        console.log(error);
        alert(error)
      });
  };

  const source = {
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBG1Bl_akIk0oU-pFMLCCH8m-q2TGIU9fKA&usqp=CAU',
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff', padding: 20}}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#87f3e6', '#617170']}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          marginBottom: 25,
        }}>
        <View
          style={{
            height: 250,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 25,
            marginRight: 25,
          }}>
            {detail.userDetail.profileImgURL ? <Image source={{uri: detail.userDetail.profileImgURL}} style={{width: 150, height: 150, marginBottom: 10, borderRadius: 80}} /> : <Image
            source={require('../../../assets/pictures/user.png')}
            style={{width: 130, height: 130, marginBottom: 10}}></Image>}
          
          <H1 style={{fontWeight: 'bold', color: '#ffffff'}}>
            {state.user.userData.name}
          </H1>
          <Text note style={{color: '#000000'}}>
            {state.user.userData.email}
          </Text>
          <Text style={{color: '#000000', fontSize: 20}}>
            {state.user.userData.city}
          </Text>
        </View>
      </LinearGradient>

      <Content style={{marginTop: 20, margin: 10}}>
        <View style={styles.listContainer}>
          <Icon active type="Feather" name="user" style={{marginRight: 15}} />
          <Text style={{fontSize: 19}}>About me</Text>
          <Right>
            <Icon
              type="Entypo"
              name="chevron-right"
              onPress={() => {
                navigation.navigate('About me')
              
              }}
            />
          </Right>
        </View>
        <View style={styles.listContainer}>
          <Icon
            active
            type="Ionicons"
            name="ios-key-outline"
            style={{marginRight: 15}}
          />
          <Text style={{fontSize: 19}}>Change Password</Text>
          <Right>
            <Icon type="Entypo" name="chevron-right" 
            onPress={() => {
              navigation.navigate('Change Password')
            
            }}
            />
          </Right>
        </View>
        <View style={styles.listContainer}>
          <Icon
            active
            type="Ionicons"
            name="settings-outline"
            style={{marginRight: 15}}
          />
          <Text style={{fontSize: 19}}>Settings</Text>
          <Right>
            <Icon type="Entypo" name="chevron-right" 
            onPress={() => {
              navigation.navigate('Change Password')
            
            }}
            />
          </Right>
        </View>
        <SignOut signOut={() => handleLogOut()} />
      </Content>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginBottom: 15,
  },
});
