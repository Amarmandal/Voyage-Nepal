import React from 'react';
import {ScrollView} from 'react-native';
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
  Title
} from '../../Components/FormComponents/FormCompponents';

const Signup = ({navigation}) => {
  return (
    <Container style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <Content padder>
        <ScrollView>
          <View style={{alignItems: 'center', margin: 12}}>
            <GifComponent />
            <Title />
            <ActionText text = 'CREATE AN ACCOUNT'/>
            <View
              style={{
                borderWidth: 3,
                borderColor: 'black',
                width: '80%',
                marginBottom: 20,
                opacity: 0.1,
                borderRadius: 10,
                shadowColor: 'black',
                elevation: 8,
              }}></View>
            <FormInput icon="pencil" placeholder="Full Name" />
            <FormInput icon="mail-outline" placeholder="Email Address" />
            <FormInput icon="key" placeholder="Password" />
            <FormInput icon="key" placeholder="Confirm PAssword" />
            <ActionButton buttonName = 'Sign up' home={() => navigation.navigate('Home')}/>
            <Account text = 'Already have an Account? ' action = 'Login' signup={() => navigation.navigate('Signin')} />
          </View>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Signup;
