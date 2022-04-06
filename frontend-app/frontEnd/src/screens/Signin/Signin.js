import React, {useState, useEffect} from 'react';
import {
  Image,
  ActivityIndicator,
  Linking
} from 'react-native';
import {Container, Content, View, Text, Button, Icon} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FormInput,
  ActionButton,
  Account,
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
import LoadingModal from '../../utils/Modal';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';

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
  const [user, setUser] = useState({})

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "942468371176-c982abr7i767nobbkbu0lb1qglnfk71i.apps.googleusercontent.com", 
      offlineAccess: true,
      forceCodeForRefreshToken: true,

    });
    isSignedIn()
  }, []);

  const GoogleSignUp = async() => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('due..', userInfo)
      setUser(userInfo)
      // await GoogleSignin.signIn().then(result => { console.log(result) });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('User cancelled the login flow !');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Google play services not available or outdated !');
        // play services not available or outdated
      } else {
        console.log(error)
      }
    }
  };

  const isSignedIn = async() => {
    const isSignedIn = await GoogleSignin.isSignedIn()
    if(!!isSignedIn){
      getCurrentUserInfo()
    }else{
      console.log('Please Login');
    }
  }

  const getCurrentUserInfo = async() => {
    try {
      const userInfo = await GoogleSignin.signInSilently()
      console.log('edit..', user);
      setUser(userInfo)
    } catch (error) {
      if(error.code === statusCodes.SIGN_IN_REQUIRED){
        alert('User has not signed in yet')
        console.log('User has not signed in yet')
      }else{
        alert("Something went wrong")
        console.log("Something went wrong")
      }
    }
  }

  const signOut = async() => {
    try {
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
      setUser({})
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(async () => {
    const userEmail = await AsyncStorage.getItem('email');
    if (userEmail !== null) {
      setData({...data, email: userEmail});
    }
  }, []);

  useEffect(() => {
    if (state.user && !state.loading) {
      // console.log(state);
      setData({
        ...data,
        password: '',
        isValidEmail: true,
        isValidPassword: true,
      });
      setError('');
      navigation.navigate('LoadingScreen1', {
        id: state.user.userData.id,
        token: state.user.token,
      });
      setError('');
      // return <LoadingModal visibility={false} />;
    } else if (state.errors) {
      setError(state.errors);
      // reutrn(<LoadingModal visibility={false} />);
    }
  }, [state.user, state.errors, state]);

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

  var signinUser = {
    email: data.email,
    password: data.password,
  };

  const submitValues = async () => {
    if (data.email !== '' && data.password !== '') {
      dispatch(loginUser(signinUser));
    } else {
      setError('All the fields are required');
    }
  };

  const handleForgotPAssword = () => {
    navigation.navigate('Dob');
  };

  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }

  return (
    <Container style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <Button transparent onPress={() => navigation.goBack()} large>
        <Icon
          name="arrow-back-circle-sharp"
          style={{color: Colors.themeColor, fontSize: 38}}
        />
      </Button>
      <Content keyboardShouldPersistTaps={'handled'}>
        {/* <Image
          source={require('../../assets/images/display.png')}
          style={{marginBottom: 50, opacity: 0.8}}
        /> */}
        <Image
          source={require('../../assets/pictures/newlogo.png')}
          style={{
            width: 160,
            height: 160,
            alignSelf: 'center',
            marginBottom: 30,
          }}></Image>

        <Text
          style={{
            fontSize: 18,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          sign in to continue
        </Text>
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
            buttonName={
              state.loading ? <ActivityIndicator color="#ffffff" /> : 'Login'
            }
            home={() => submitValues()}
          />
          <View style={{display: 'flex', flexDirection: 'row', marginBottom: 14}}>
            <Icon name="logo-google" onPress={GoogleSignUp} size={18} style = {{marginRight: 15, color: Colors.google, fontSize: 34}}/>
            <Icon name="logo-facebook" size={18} style = {{color: Colors.facebook, fontSize: 34}} />
          </View>
          <Account
            text="Don't have an Account? "
            action="Signup"
            signup={() => navigation.navigate('Signup')}
          />
        </View>
        {/* {state.loading ? (
          <LoadingModal visibility={true} />
        ) : (
          <LoadingModal visibility={false} />
        )} */}
      </Content>
    </Container>
  );
};

export default Signin;
