import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {FormInput} from '../../../Components/FormComponents/FormCompponents';
import {Button} from 'native-base'
import styles from './OTP.styles'
import GoBack from '../../../Components/Signin/GoBack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import api from '../../../services/ApiServices'

const ResetPassword = ({navigation}) => {
  const state = useSelector(state => state.resetOtp.resetID.userResetId)
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [data, setData] = useState({
    password: '',
    confirmPassword: '',

    isValidPassword: true,
    isValidConfirmPassword: true,
  });
  const [error, setError] = useState('')


  const getPassword = _password => {
    setData({...data, password: _password, isValidPassword: true});
  };
  const getConfirmPassword = _confirmPassword => {
    setData({
      ...data,
      confirmPassword: _confirmPassword,
      isValidConfirmPassword: true,
    });
  };

  const handleValidPassword = () => {
    if (data.password.length >= 6) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };
  const handleValidConfirmPassword = () => {
    if (data.password === data.confirmPassword) {
      setData({
        ...data,
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidConfirmPassword: false,
      });
    }
  };

  var userData = JSON.stringify({
    "password": data.password
  });
  
  var config = {
    method: 'post',
    url: `/user/${state}/reset-password`,
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json'
    },
    data : userData
  };

  const handleSubmit = () => {
    if(data.password !== '' && data.confirmPassword !== ''){
      api(config)
      .then(res => {
        Alert.alert("Voyage Nepal", 'Password Changed Successfully. Please login!', [
          { text: "OK", onPress: () => null }
        ])
        navigation.navigate('Signin')
      })
      .catch(err => {
        setError(err.data)
      })
    }
  }

  return (
    <View style = {{backgroundColor: '#ffffff', flex: 1,}}>
        <GoBack goBack = {() => navigation.goBack()}  />
      <View style = {{margin: 20}}>
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
        <FormInput
          icon="key"
          placeholder="Confirm Password"
          value={data.confirmPassword}
          onChangeText={getConfirmPassword}
          onBlur={() => handleValidConfirmPassword()}
          rightIcon={hideConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
          showPassword={() => setHideConfirmPassword(!hideConfirmPassword)}
          secureText={hideConfirmPassword ? true : false}
        />
        {data.isValidConfirmPassword ? null : (
          <Text style={{color: '#FF0000', fontSize: 14, marginBottom: 10}}>
            Password and confirm password doesn't match
          </Text>
        )}
        <Button onPress = {() => handleSubmit()} rounded style = {styles.nextButton}><Text style = {styles.nextButtonText}>Submit</Text></Button>
        
      </View>
    </View>
  );
};

export default ResetPassword;
