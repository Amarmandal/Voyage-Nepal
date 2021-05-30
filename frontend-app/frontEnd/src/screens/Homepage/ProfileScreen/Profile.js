import React, {useState, useEffect} from 'react';
import {
  Image,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native';
import {
  View,
  Text,
  Item,
  Icon,
  Button,
  H1,
  Content,
  CardItem,
  Card,
  Right,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Divider,
  Img,
  List,
  SignOut,
  UserName,
} from '../../../Components/Home/profile/Profile';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux'

import Colors from '../../../constants/Color';

const Profile = ({navigation}) => {
  const state = useSelector(state => state.loginUser)
  const imageWidth = useWindowDimensions().width;
  const imageHeight = Math.round(imageWidth * (1105 / 2004));
  const [name, setName] = useState();

  useEffect(async () => {
    const userName = await AsyncStorage.getItem('userData');
    setName(userName);
  }, []);

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('token');
    if ((await AsyncStorage.getItem('token')) === null) {
      console.log('no Token');
      navigation.navigate('Starter');
    }
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
        }}>
        <View
          style={{
            height: 250,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 25,
            marginRight: 25,
          }}>
          <Image
            source={require('../../../assets/pictures/profile.png')}
            style={{width: 150, height: 150, marginBottom: 10}}></Image>
          <H1 style={{fontWeight: 'bold', color: '#ffffff'}}>{state.user.userData.name}</H1>
          <Text note style={{color: '#000000'}}>
            {state.user.userData.email}
          </Text>
          <Text style={{color: '#000000', fontSize: 20}}>{state.user.userData.city}</Text>
        </View>
      </LinearGradient>
      <Divider />

      <Content style = {{marginTop: 20, margin: 10}}>
        <View
          style={styles.listContainer}>
          <Icon active type="Feather" name="user" style = {{marginRight: 15}} />
          <Text style = {{fontSize: 19}}>About me</Text>
          <Right>
            <Icon type="Entypo" name="chevron-right" onPress = {() => navigation.navigate('About me')}/>
          </Right>
        </View>
        <View
          style={styles.listContainer}>
          <Icon active type = 'Ionicons' name="ios-key-outline" style = {{marginRight: 15}} />
          <Text style = {{fontSize: 19}}>Change Password</Text>
          <Right>
            <Icon type="Entypo" name="chevron-right" />
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
  }
})
