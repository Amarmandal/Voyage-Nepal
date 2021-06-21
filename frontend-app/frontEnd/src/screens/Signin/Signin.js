import React, {useState, useEffect} from 'react';
import {Image, ScrollView, Modal, ActivityIndicator, SafeAreaView} from 'react-native';
import {Container, Content, View, Text, Button} from 'native-base';
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
import Loading from '../LoadingScreen/Loading';
import GoBack from '../../Components/Signin/GoBack';

import {loginUser} from '../../redux/action/Login/loginUser';

import {useDispatch, useSelector} from 'react-redux';

// import {
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
//   LoginManager,
// } from 'react-native-fbsdk-next';

const Signin = ({navigation}) => {
  const state = useSelector(state => state.loginUser);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const [userData, setUserData] = useState({});
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
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  var signinUser = {
    email: data.email,
    password: data.password,
  };

  const showErrors = (err) => {
    if(err.message === 'Network Error'){
      alert('Please Check your Internet Connection and Try again')
    } else if(err.message === 'Request failed with status code 401'){
      setError(err.response.data.error)
    } else {
      setError('Something Went Wrong')
    }
    
  }

  const submitValues = async () => {
    if (data.email !== '' && data.password !== '') {
      dispatch(loginUser(signinUser)).then(result => {
        // console.log(state.errors);
        // fetchDetails()
        if (result.token) {
          setData({
            ...data,
            password: '',
            isValidEmail: true,
            isValidPassword: true,
          });
          setError('');
          storeData(result);
          navigation.navigate('LoadingScreen1', {
            id: result.userData.id,
            token: result.token,
          });
        }
        state.errors ? showErrors(state.errors) : console.log('no Error');
      });
    } else {
      setError('All the fields are required');
    }
  };

  const handleForgotPAssword = () => {
    navigation.navigate('Email');
  };

  // const getInfoFromToken = token => {
  //   const PROFILE_REQUEST_PARAMS = {
  //     fields: {
  //       string: 'id,name,first_name,last_name,picture,email',
  //     },
  //   };
  //   const profileRequest = new GraphRequest(
  //     '/me',
  //     {token, parameters: PROFILE_REQUEST_PARAMS},
  //     (error, user) => {
  //       if (error) {
  //         console.log('login info has error: ' + error);
  //       } else {
  //         setUserData({user});
  //         // this.setState({userInfo: user});
  //         console.log('result:', user);

  //       }
  //     },
  //   );
  //   new GraphRequestManager().addRequest(profileRequest).start();
  // };

  // const loginWithFb = async() => {
  //   LoginManager.logInWithPermissions(['public_profile']).then(
  //     login => {
  //       if (login.isCancelled) {
  //         console.log('Login cancelled');
  //       } else {
  //         AccessToken.getCurrentAccessToken().then(data => {
  //           const accessToken = data.accessToken.toString();
  //           console.log(accessToken);
  //           getInfoFromToken(accessToken);
  //         });
  //       }
  //     },
  //     error => {
  //       console.log('Login fail with error: ' + error);
  //     },
  //   );
  // };

  return (
    <SafeAreaView style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <GoBack goBack={() => navigation.goBack()} />
      <Image source = {require('../../assets/pictures/Logo.png')} style = {{width: 150, height: 150, alignSelf: 'center', marginBottom: 40}} />
      <Container style={{
          borderWidth: 3,
          borderTopWidth: 3,
          borderBottomWidth: 0,
          borderColor: Colors.themeColor,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
      <Content
        padder
        keyboardShouldPersistTaps={'handled'}
        >
        <ScrollView>
          <View style={{alignItems: 'center', margin: 12}}>
          <Text style = {{ fontSize: 25, fontWeight: 'bold', marginBottom: 30, marginTop: 10}}>Login</Text>
            {/* <View style={{flexDirection: 'row'}}>
              <SocialMediaLogin iconName="google" bgcolor={Colors.google} />
              <SocialMediaLogin
                iconName="facebook"
                bgcolor={Colors.facebook}
                login={() => loginWithFb()}
              />
            </View> */}
            {/* <LineWithText /> */}
            {error === '' ? null : (
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 14,
                  marginBottom: 10,
                  fontWeight: 'bold',
                }}>
                {'Error: ' + error + '!!'}
              </Text>
            )}
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

            <ActionButton
              mt={80}
              buttonName="Continue"
              // home={() => submitValues()}
              home={() => submitValues()}
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
    </SafeAreaView>
  );
};

export default Signin;
