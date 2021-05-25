import React, {useState, useEffect} from 'react';
import {Image, ScrollView, Modal, ActivityIndicator} from 'react-native';
import {Container, Content, View, Text} from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import FormData from '../../utils/formData';

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
  SocialMediaLogin
} from '../../Components/Signin/Signin';
import Colors from '../../constants/Color';
import Loading from '../LoadingScreen/Loading';
import GoBack from '../../Components/Signin/GoBack';

import {loginUser} from '../../redux/action/Login/loginUser'

import {useDispatch} from 'react-redux'

const Signin = ({navigation}) => {

  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [userData, setUserData] = useState({
    userId: '',
    name: '',
    email: '',
    isAdmin: false,
    city: '',
    gender: '',
    dob: '',
  });
  const [error, setError] = useState('');
  const [data, setData] = useState({
    email: '',
    password: '',
    isValidEmail: true,
    isValidPassword: true,
  });


  useEffect(async () => {
    const userEmail = await AsyncStorage.getItem('email');
    if (userEmail !== null) {
      setData({...data, email: userEmail});
    }
  }, []);

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

  const storeData = async result => {

    try {
      await AsyncStorage.setItem('token', result.token);
      await AsyncStorage.setItem('email', result.userData.email);
      await AsyncStorage.setItem('userData', result.userData.name);
  
    } catch (e) {
      // saving error
      console.log(e);
    }
  };


  var signinUser = {
    email: data.email,
    password: data.password,
  }

  const submitValues = () => {
    if (data.email !== '' && data.password !== '') {
      dispatch(loginUser(signinUser))
        .then(result => {
          storeData(result.data);
          console.log(result.data.userData);
          navigation.navigate('Home');
        })
        .catch(function (error) {
          // console.log(error.response.data.error);
          console.log(error)
          setError(error);
        });
    } else {
      setError('All the fields are required');
    }
  };

  const handleForgotPAssword = () => {
    navigation.navigate('Email');
  };

  return (
    <Container style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <GoBack goBack = {() => navigation.goBack()} />
      <Content padder keyboardShouldPersistTaps={'handled'}>
        <ScrollView>
          
          <View style={{alignItems: 'center', margin: 12}}>
            {/* <GifComponent /> */}
            {/* <Title /> */}
            {/* <ActionText text="SIGN IN" /> */}
            <Text style = {{alignSelf: 'flex-start', fontSize: 25, fontWeight: 'bold', marginBottom: 20, marginTop: 20}}>Get Started</Text>
            {/* <HorizontalLine /> */}
            {error === '' ? null : (
              <Text
                style={{
                  color: '#FF0000',
                  fontSize: 14,
                  marginBottom: 10,
                  fontWeight: 'bold',
                }}>
                {'error: ' + error + '**'}
              </Text>
            )}
            <View style = {{flexDirection: 'row'}}>
            <SocialMediaLogin
              
              iconName="google"
              bgcolor={Colors.google}
            />
            <SocialMediaLogin
              
              iconName="facebook"
              bgcolor={Colors.facebook}
            />
            </View>
            <LineWithText />
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
              rightIcon={hidePassword ? 'eye-off-outline' : 'eye-outline'}
              showPassword={() => setHidePassword(!hidePassword)}
              secureText={hidePassword ? true : false}
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
            <ForgotPassword forgotPassword={() => handleForgotPAssword()} />

            <ActionButton mt = {80} buttonName="Continue" home={() => submitValues()} />
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
