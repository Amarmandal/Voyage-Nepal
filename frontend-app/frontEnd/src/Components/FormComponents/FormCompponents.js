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
import Colors from '../../constants/Color'

export const GifComponent = props => {
  return (
    <Image
      source={require('../../assets/pictures/bus1.gif')}
      style={{
        width: 175,
        height: 175,
        borderRadius: 400 / 2,
        overlayColor: 'white',
      }}
    />
  );
};

export const Title = props => {
  return (
    <Text
      style={{
        fontSize: 35,
        fontWeight: '200',
        fontFamily: 'GentiumBookBasic-Bold',
        marginBottom: 10,
      }}>
      Voyage Nepal
    </Text>
  );
};

export const ActionText = props => {
  return (
    <Text
      style={{
        fontSize: 25,
        fontWeight: '300',
        color: '#800000',
        fontFamily: 'GentiumBookBasic-Bold',
      }}>
      {props.text}
    </Text>
  );
};



export const FormInput = props => {

  return (
    <Item rounded style={{margin: 10}}>
      <Icon name={props.icon}></Icon>
      <Input placeholder={props.placeholder} onChangeText = {(text) => props.onChangeText(text)} value = {props.value} onFocus = {props.onFocus} onBlur = {props.onBlur} secureTextEntry = {props.secureText} />
      <Icon name={props.rightIcon} onPress = {props.showPassword}></Icon>
    </Item>
  );
};

export const ActionButton = props => {
  return (
    <Button rounded block style = {{marginBottom: 15, backgroundColor: Colors.themeColor, marginTop: props.mt}}>
      <Text
      uppercase = {false}
        onPress={props.home}
        style={{fontSize: 20}}>
        {props.buttonName}
      </Text>
    </Button>
  );
};

export const Account = props => {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 15}}>
      <Text style={{fontSize: 18}}>{props.text}</Text>
      <Text style={{fontSize: 18, color: '#CF3838'}} onPress={props.signup}>
        {props.action}
      </Text>
    </View>
  );
};
