import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  Modal,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {Container, Content, View, Text, Button, Icon} from 'native-base';
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

  useEffect(() => {
    if(state.user){
      console.log(state);
      setData({
        ...data,
        password: '',
        isValidEmail: true,
        isValidPassword: true,
      });
      navigation.navigate('LoadingScreen1', {
        id: state.user.userData.id,
        token: state.user.token,
      });
      setError('')
    }else if(state.errors){
      setError(state.errors)
    }
  }, [state.user, state.errors])

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

  // const storeData = async result => {
  //   try {
  //     await AsyncStorage.setItem('token', result.token);
  //     await AsyncStorage.setItem('email', result.userData.email);
  //   } catch (e) {
  //     // saving error
  //     console.log(e);
  //   }
  // };

  var signinUser = {
    email: data.email,
    password: data.password,
  };

  const showErrors = err => {
    if (err.message === 'Network Error') {
      alert('Please Check your Internet Connection and Try again');
    } else if (err.message === 'Request failed with status code 401') {
      setError(err.response.data.error);
    } else {
      setError('Something Went Wrong');
    }
  };

  const submitValues = async () => {
    if (data.email !== '' && data.password !== '') {
      dispatch(loginUser(signinUser))
    } else {
      setError('All the fields are required');
    }
  };


  const handleForgotPAssword = () => {
    navigation.navigate('Email');
  };

  return (
    <Container style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <Content keyboardShouldPersistTaps={'handled'}>
        <Image
          source={require('../../assets/images/display.png')}
          style={{marginBottom: 50, opacity: 0.8}}
        />
        <Image
          source={require('../../assets/pictures/logoEdit.png')}
          style={{
            width: 160,
            height: 160,
            position: 'absolute',
            top: 170,
            alignSelf: 'center',
            marginBottom: 30,
          }}></Image>
        <Button
          transparent
          onPress={() => navigation.goBack()}
          large
          style={{position: 'absolute', top: 8}}>
          <Icon
            name="arrow-back-circle-sharp"
            style={{color: '#ffffff', fontSize: 38}}
          />
        </Button>

        
          <View style={{alignItems: 'center', margin: 30}}>
            {error === '' ? null : (
              <Text
                style={{
                  color: Colors.error,
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
              mt={20}
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
      
      </Content>
    </Container>
  );
};

export default Signin;
