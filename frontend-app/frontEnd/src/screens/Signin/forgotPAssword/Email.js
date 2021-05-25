import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'native-base';
import {FormInput} from '../../../Components/FormComponents/FormCompponents';
import styles from './OTP.styles';
import axios from 'axios';
import Colors from '../../../constants/Color';
import GoBack from '../../../Components/Signin/GoBack';

const Email = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(true);
  const [res, setRes] = useState('');
  const getEmail = _email => {
    setEmail(_email);
  };
  const handleValidEmail = () => {
    if (email !== '') {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  var data = JSON.stringify({
    email: email,
  });
  var config = {
    method: 'post',
    url: 'http://10.0.2.2:8080/api/user/forget-password',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    data: data,
  };

  const handleSubmit = () => {
    if (email !== '') {
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data.message));
          alert(response.data.message);
          navigation.navigate('MyModal');
        })
        .catch(function (error) {
          console.log(error);
          setRes('No user found with this email');
        });
    } else {
      console.log('Required Email');
      setValid(false);
    }
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <GoBack goBack = {() => navigation.goBack()} />
      <View style = {{padding: 30, paddingTop: 40}}>
        <Image
          source={require('../../../assets/pictures/forgetpassword.png')}
          style={{alignSelf: 'center', marginBottom: 30}}
        />
        <FormInput
          icon="mail-outline"
          placeholder="Email Address"
          value={email}
          onChangeText={getEmail}
          onBlur={() => handleValidEmail()}
        />
        {valid ? null : (
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
        {res === '' ? null : (
          <Text
            style={{
              color: Colors.error,
              fontSize: 14,
              marginBottom: 10,
              alignSelf: 'center',
            }}>
            {res}
          </Text>
        )}
        
        <Button
          rounded
          style={styles.nextButton}
          onPress={() => handleSubmit()}>
          <Text style={styles.nextButtonText}>Submit</Text>
        </Button>
      </View>
    </View>
  );
};

export default Email;
