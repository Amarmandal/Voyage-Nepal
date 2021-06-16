import React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon, Content, Container} from 'native-base';

const PrivacyPolicy = ({navigation}) => {
  return (
    <Container>
      <Button transparent onPress={() => navigation.goBack()} large>
        <Icon name="arrow-back" style={{color: '#52c0b4', fontSize: 25}} />
      </Button>
      <Content padder>
        <Text>Privacy Policy Here</Text>
      </Content>
    </Container>
  );
};

export default PrivacyPolicy;
