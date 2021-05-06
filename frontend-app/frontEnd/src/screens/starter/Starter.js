import React from 'react';
import {Text, Button, View, Icon} from 'native-base';

const Starter = ({navigation}) => {
  return (
    <View style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <View padder style={{margin: 15, alignItems: 'center'}}>
        <Text style={{fontSize: 75, fontWeight: '700', fontFamily: 'GentiumBookBasic-Bold'}}>Voyage Nepal</Text>
        <View padder style = {{top: '50%',}}>
          <Button iconLeft block rounded light style = {{marginBottom: 10, justifyContent: 'flex-start'}}>
            <Icon name="mail-outline" />
            <Text style={{fontSize: 19, fontWeight: '700'}} uppercase={false}>
              Continue with Gmail
            </Text>
          </Button>
          <Button iconLeft block rounded light style = {{marginBottom: 10}}>
            <Icon name="mail-outline"/>
            <Text style={{fontSize: 19, fontWeight: '700'}}uppercase={false}>
              Continue with Facebook
            </Text>
          </Button>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button iconLeft block rounded light>
            <Icon name="mail-outline" />
            <Text style={{fontSize: 19, fontWeight: '700'}} uppercase={false}>
              Signup
            </Text>
          </Button>
          <Button iconLeft block rounded light>
            <Icon name="mail-outline" />
            <Text style={{fontSize: 19, fontWeight: '700'}} uppercase={false}>
              Signin
            </Text>
          </Button>
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default Starter;
