import React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon, Content, Container} from 'native-base';

const TermsAndCond = ({navigation}) => {
  return (
    <Container>
      <View style = {{flexDirection: 'row', alignItems: 'center'}}>
      <Button transparent onPress={() => navigation.goBack()} large>
        <Icon name="arrow-back" style={{color: '#52c0b4', fontSize: 25}} />
      </Button>
      <Text style={{fontSize: 20, fontWeight: '800'}}>Terms and Conditions</Text>
      </View>
      
      <Content padder>
        
      </Content>
    </Container>
  );
};

export default TermsAndCond;
