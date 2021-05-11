import React from 'react';
import {Image} from 'react-native';
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

export const FormInput = props => {
  return (
    <Item rounded style={{margin: 10}}>
      <Icon name={props.icon}></Icon>
      <Input placeholder={props.placeholder} />
    </Item>
  );
};

export const ActionButton = props => {
  return (
    <Button rounded block light style={{marginBottom: 12}}>
      <Text
        onPress={props.home}
        style={{fontSize: 22, fontFamily: 'GentiumBookBasic-Bold'}}>
        Login
      </Text>
    </Button>
  );
};

export const Account = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 18}}>Don't have an account? </Text>
      <Text
        style={{fontSize: 18, color: '#CF3838'}}
        onPress={props.signup}>
        Signup
      </Text>
    </View>
  );
};
