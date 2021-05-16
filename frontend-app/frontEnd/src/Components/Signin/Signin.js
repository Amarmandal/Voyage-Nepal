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

import Colors from '../../constants/Color';
import SigninStyles from './Signin.styles'

export const HorizontalLine = () => {
  return (
    <View
      style={SigninStyles.horizontalLine}></View>
  );
};

export const ForgotPassword = () => {
  return (
    <Text
      style={SigninStyles.forgotPasswordText}>
      Forgot Password?
    </Text>
  );
};

export const LineWithText = () => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      <View
        style={{
          backgroundColor: Colors.gray,
          height: 1,
          flex: 1,
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
          paddingHorizontal: 5,
          fontSize: 18,
          color: Colors.dimGray,
        }}>
        Or login with
      </Text>
      <View
        style={{
          backgroundColor: Colors.gray,
          height: 1,
          flex: 1,
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

export const SocialMediaLogin = (props) => {
  return (
    <View style={{flexDirection: 'column', marginBottom: 10}}>
      <Button
        iconLeft
        rounded
        style={[SigninStyles.SocialMediaLoginBtn, {backgroundColor: props.bgcolor}]}>
        <Icon type="FontAwesome" name={props.iconName} style={{fontSize: 25}} />
        <Text uppercase={false} style={{fontSize: 18}}>
          {props.text}
        </Text>
      </Button>
    </View>
  );
};
