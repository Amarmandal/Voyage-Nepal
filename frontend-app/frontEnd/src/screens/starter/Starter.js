import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {Text, Button, View, Icon} from 'native-base';

const Starter = ({navigation}) => {
  return (
    <View style={{display: 'flex', flex: 1, backgroundColor: '#ffffff'}}>
      <View>
        <ImageBackground
          source={require('../../assets/pictures//boarding.jpg')}
          style={{width: '100%', height: '100%'}}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 75,
                fontWeight: '200',
                fontFamily: 'GentiumBookBasic-Bold',
              }}>
              Voyage Nepal
            </Text>
            <View padder style={{top: '60%'}}>
              {/* <Button
                iconLeft
                block
                rounded
                light
                style={{marginBottom: 10, justifyContent: 'flex-start'}}>
                <Icon name="mail-outline" />
                <Text
                  style={{fontSize: 19, fontWeight: '700'}}
                  uppercase={false}>
                  Continue with Gmail
                </Text>
              </Button> */}
              {/* <Button iconLeft block rounded light style={{marginBottom: 10}}>
                <Icon name="logo-facebook" />
                <Text
                  style={{fontSize: 19, fontWeight: '700'}}
                  uppercase={false}>
                  Continue with Facebook
                </Text>
              </Button> */}
              <View
                style={{marginTop: 120}}>
                {/* <Button block rounded light style = {{padding: 13}} onPress = {() => {navigation.navigate('Signup')}}>
                  <Text
                    style={{fontSize: 19, fontWeight: '700'}}
                    uppercase={false}>
                    Signup
                  </Text>
                </Button> */}
                <Button transparent iconRight style = {{ alignItems: 'center', justifyContent: 'center'}} onPress = {() => {navigation.navigate('Signin')}}>
                  <Text
                    style={{fontSize: 30, fontWeight: '700', color: '#ffffff'}}
                    uppercase={false}>
                    Let's Travel
                  </Text>
                  <Icon name = 'arrow-forward' style = {{fontSize: 40, color: '#ffffff'}} />
                </Button>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Starter;
