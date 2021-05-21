import React, {useState, useEffect} from 'react';
import {Image, ScrollView, Modal, ActivityIndicator} from 'react-native';
import {Container, Content, View, Text} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  FormInput,
  ActionButton,
  Account,
  GifComponent,
  ActionText,
  Title,
} from '../../Components/FormComponents/FormCompponents';
import {
  ForgotPassword,
  HorizontalLine,
  LineWithText,
  SocialMediaLogin,
} from '../../Components/Signin/Signin';
import Colors from '../../constants/Color';
import Loading from '../LoadingScreen/Loading'

const Signin = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [error, setError] = useState('')
  const [data, setData] = useState({
    email: '',
    password: '',
    isValidEmail: true,
    isValidPassword: true,
  });

  useEffect(async() => {
    const userEmail = await AsyncStorage.getItem('email')
    if(userEmail !== null){
      setData({...data, email: userEmail})
    }
  }, [])

  const getEmail = _email => {
    setData({...data, email: _email});
  };

  const getPassword = _password => {
    setData({...data, password: _password});
  };

  const handleValidEmail = () => {
    if (data.email !== '') {
      setData({...data, isValidEmail: true});
    } else {
      setData({...data, isValidEmail: false});
    }
  };

  const handleValidPassword = () => {
    if (data.password !== '') {
      setData({...data, isValidPassword: true});
    } else {
      setData({...data, isValidPassword: false});
    }
  };

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('token', value.token);
      await AsyncStorage.setItem('email', value.userData.email)
      await AsyncStorage.setItem('userData', value.userData.name)
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  var signinUser = JSON.stringify({
    "email": data.email,
    "password": data.password,
  });

  var config = {
    method: 'post',
    url: 'http://10.0.2.2:8080/api/user/signin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: signinUser,
  };

  const submitValues = () => {
    if(data.email !== '' && data.password !== ''){ 
      axios(config)
        .then(function (res) {
          // const userToken = JSON.parse(res.data)
          // console.log(userToken)
          // console.log(res.data.userData.email);
          storeData(res.data);
          navigation.navigate('Home')
        })
        .catch(function (error) {
          // console.log(error.response.data.error_description);
          console.log(error);
          setError(error)
        });
    }else {
      setError('All the fields are required')
    }
    
  };

  return (
    <Container style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <Content padder>
        <ScrollView>
          <View style={{alignItems: 'center', margin: 12}}>
            <GifComponent />
            <Title />
            <ActionText text="SIGN IN" />
            <HorizontalLine />
            {error === '' ? null : (<Text
                style={{
                  color: '#FF0000',
                  fontSize: 14,
                  marginBottom: 10,
                  fontWeight: 'bold'
                }}>
                {'error: ' + error + '**'}
              </Text>)}
            <FormInput
              icon="mail-outline"
              placeholder="Email Address"
              value={data.email}
              onChangeText={getEmail}
              onBlur={() => handleValidEmail()}
            />
            {data.isValidEmail ? null : (
              <Text
                style={{
                  color: '#FF0000',
                  fontSize: 14,
                  marginBottom: 10,
                  alignSelf: 'flex-end',
                }}>
                Required!
              </Text>
            )}
            <FormInput
              icon="key"
              placeholder="Password"
              value={data.password}
              onChangeText={getPassword}
              onBlur={() => handleValidPassword()}
              rightIcon = {hidePassword ? 'eye-off-outline' : 'eye-outline'}
              showPassword={() => setHidePassword(!hidePassword)}
              secureText = {hidePassword ? true : false}
            />
            {data.isValidPassword ? null : (
              <Text
                style={{
                  color: '#FF0000',
                  fontSize: 14,
                  marginBottom: 10,
                  alignSelf: 'flex-end',
                }}>
                Required!
              </Text>
            )}
            <ForgotPassword />
            
            <ActionButton buttonName="Login" home={() => submitValues()} />
            <LineWithText />
            <SocialMediaLogin
              text="Login with Google"
              iconName="google"
              bgcolor={Colors.google}
            />
            <SocialMediaLogin
              text="Login with Facebook"
              iconName="facebook"
              bgcolor={Colors.facebook}
            />
            <Account
              text="Don't have an Account? "
              action="Signup"
              signup={() => navigation.navigate('Signup')}
            />
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Signin;
