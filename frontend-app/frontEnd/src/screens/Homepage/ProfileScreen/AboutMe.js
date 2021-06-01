import React from 'react';
import {View, Text, Image} from 'react-native';
import {Container, Content, Item, Input, H2, Icon, Button, H1} from 'native-base';
import Colors from '../../../constants/Color';
import {useSelector} from 'react-redux';

const AboutMe = ({navigation}) => {
  const state = useSelector(state => state.loginUser);
  return (
    <Container style={{backgroundColor: '#ffffff'}}>
      <Button
        transparent
        onPress={() => navigation.goBack()}
        large>
        <Icon name="arrow-back" style={{color: '#52c0b4', fontSize: 25}} />
      </Button>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: 10,
          marginBottom: 20,
        }}>
        <Image
          source={require('../../../assets/pictures/profile.png')}
          style={{width: 150, height: 150}}
        />
        <View>
          <H2>Profile</H2>
          <Text style={{color: Colors.warning}}>Change Picture</Text>
        </View>
      </View>
      <Content style={{margin: 20, marginLeft: 40}}>
        <H1 style={{fontSize: 23, fontWeight: '900', color: '#000000'}}>
          Name
        </H1>
        <Item style={{marginBottom: 25}}>
          <Input
            disabled
            placeholder={state.user.userData.name}
            style={{fontSize: 22, fontWeight: '600'}}
          />
        </Item>
        <H1 style={{fontSize: 23, fontWeight: '900', color: '#000000'}}>
          Email
        </H1>
        <Item style={{marginBottom: 25}}>
          <Input
            disabled
            placeholder={state.user.userData.email}
            style={{fontSize: 22, fontWeight: '600'}}
          />
        </Item>
        <H1 style={{fontSize: 23, fontWeight: '900', color: '#000000'}}>
          Date of Birth
        </H1>
        <Item style={{marginBottom: 25}}>
          <Input
            disabled
            placeholder="1999-02-28"
            style={{fontSize: 22, fontWeight: '600'}}
          />
        </Item>
        <H1 style={{fontSize: 23, fontWeight: '900', color: '#000000'}}>
          Address
        </H1>
        <Item style={{marginBottom: 25}}>
          <Input
            disabled
            placeholder={state.user.userData.city}
            style={{fontSize: 22, fontWeight: '600'}}
          />
        </Item>
        <H1 style={{fontSize: 23, fontWeight: '900', color: '#000000'}}>
          Gender
        </H1>
        <Item style={{marginBottom: 35}}>
          <Input
            disabled
            placeholder={state.user.userData.gender}
            style={{fontSize: 22, fontWeight: '600'}}
          />
        </Item>
      </Content>
    </Container>
  );
};

export default AboutMe;
