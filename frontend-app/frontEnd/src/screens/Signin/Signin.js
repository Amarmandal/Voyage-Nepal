import React from 'react';
import {Image, ScrollView} from 'react-native';
import {
  Container,
  Content,
  View,
} from 'native-base';
import {
  FormInput,
  ActionButton,
  Account,
  GifComponent,
  ActionText,
  Title,
} from '../../Components/FormComponents/FormCompponents';
import {
  ForgotPassword,
  HorizontalLine,
  LineWithText,
  SocialMediaLogin,
} from '../../Components/Signin/Signin';
import Colors from '../../constants/Color';

const Signin = ({navigation}) => {
  return (
    <Container style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <Content padder>
        <ScrollView>
          <View style={{alignItems: 'center', margin: 12}}>
            <GifComponent />
            <Title />
            <ActionText text="SIGN IN" />
            <HorizontalLine />
            <FormInput icon="mail-outline" placeholder="Email Address" />
            <FormInput icon="key" placeholder="Password" />
            <ForgotPassword />
            <ActionButton
              buttonName="Login"
              home={() => navigation.navigate('Home')}
            />
            <LineWithText />
            <SocialMediaLogin text = 'Login with Google' iconName = 'google' bgcolor = {Colors.google} />
            <SocialMediaLogin text = 'Login with Facebook' iconName = 'facebook' bgcolor = {Colors.facebook}  />
            <Account
            text="Don't have an Account? "
            action="Signup"
            signup={() => navigation.navigate('Signup')}
          />
          </View>  
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Signin;
