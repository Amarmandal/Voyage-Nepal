import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {FormInput} from '../../../Components/FormComponents/FormCompponents';
import {Button} from 'native-base'
import styles from './OTP.styles'
import GoBack from '../../../Components/Signin/GoBack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResetPassword = ({navigation}) => {
    const [otp, setOTP] = useState()
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [data, setData] = useState({
    password: '',
    confirmPassword: '',

    isValidPassword: true,
    isValidConfirmPassword: true,
  });

  useEffect(async() => {
      const getOtp = await AsyncStorage.getItem('OTPCode')
      setOTP(getOtp)
  }, [])

  const getPassword = _password => {
    // setPassword(_password);
    // formData.addData({Password: _password});
    setData({...data, password: _password, isValidPassword: true});
  };
  const getConfirmPassword = _confirmPassword => {
    // setConfirmPAssword(_confirmPassword);
    // formData.addData({ConfirmPassword: _confirmPassword});
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
    url: `http://localhost:8080/api/user/${otp}/reset-password`,
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json'
    },
    data : userData
  };
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
        <Button rounded style = {styles.nextButton}><Text style = {styles.nextButtonText}>Submit</Text></Button>
      </View>
    </View>
  );
};

export default ResetPassword;
