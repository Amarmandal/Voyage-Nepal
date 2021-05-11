import React from 'react';
import {Image, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  View,
  Icon,
  Input,
  Item,
} from 'native-base';
import { FormInput, ActionButton, Account } from "../../Components/FormComponents/FormCompponents";

const Signin = ({navigation}) => {
  return (
    <Container style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <Content padder>
        <View style={{alignItems: 'center', margin: 12}}>
          <Image
            source={require('../../assets/pictures/bus1.gif')}
            style={{
              width: 175,
              height: 175,
              borderRadius: 400 / 2,
              overlayColor: 'white',
            }}
          />
          <Text
            style={{
              fontSize: 35,
              fontWeight: '200',
              fontFamily: 'GentiumBookBasic-Bold',
              marginBottom: 10,
            }}>
            Voyage Nepal
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '300',
              color: '#800000',
              fontFamily: 'GentiumBookBasic-Bold'
            }}>
            SIGN IN
          </Text>
          <View
            style={{
              borderWidth: 3,
              borderColor: 'black',
              width: '35%',
              marginBottom: 20,
              opacity: 0.2,
              borderRadius: 10,
            }}></View>
          <FormInput icon = 'mail-outline' placeholder = 'Email Address'/>
          <FormInput icon = 'key' placeholder = 'Password'/>
          <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: 18,
              color: '#CF3838',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Forgot Password?
          </Text>
          <ActionButton home = {() => navigation.navigate('Home')}/>
          <Account signup = {() => navigation.navigate('Signup')} />
          
        </View>
      </Content>
    </Container>
  );
};

export default Signin;
