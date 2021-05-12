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
import {
  FormInput,
  ActionButton,
  Account,
  GifComponent,
  ActionText,
  Title,
} from '../../Components/FormComponents/FormCompponents';

const Signin = ({navigation}) => {
  return (
    <Container style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <Content padder>
        <ScrollView>
          <View style={{alignItems: 'center', margin: 12}}>
            <GifComponent />
            <Title />
            <ActionText text="SIGN IN" />
            <View
              style={{
                borderWidth: 3,
                borderColor: 'black',
                width: '35%',
                marginBottom: 20,
                opacity: 0.1,
                borderRadius: 10,
                shadowColor: 'black',
                elevation: 8,
              }}></View>
            <FormInput icon="mail-outline" placeholder="Email Address" />
            <FormInput icon="key" placeholder="Password" />
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
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              margin: 12,
              marginBottom: 20
            }}>
            <ActionButton buttonName = 'Login' home={() => navigation.navigate('Home')} />

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style = {{opacity: 0.5}}>or login with</Text>
              <Button transparent style = {{padding: 0, marginRight: -20}}>
                <Icon
                  type="Entypo"
                  name="facebook-with-circle"
                  style={{fontSize: 30}}
                />
              </Button>
              <Button transparent style = {{padding: 0, margin: 0}}>
                <Icon name="logo-google" style={{fontSize: 30}}/>
              </Button>
            </View>
          </View>
          <Account
            text="Don't have an Account? "
            action="Signup"
            signup={() => navigation.navigate('Signup')}
          />
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Signin;
