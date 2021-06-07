import React from 'react';
import {View, Text} from 'react-native';
import {Container, Content, Icon, Right} from 'native-base';

const Settings = () => {
  return (
    <Container>
      <Content style={{marginTop: 20, margin: 10}}>
        <View style={styles.listContainer}>
          <Icon active type="Feather" name="user" style={{marginRight: 15}} />
          <Text style={{fontSize: 19}}>FAQ</Text>
          <Right>
            <Icon
              type="Entypo"
              name="chevron-right"
              onPress={() => {
                navigation.navigate('About me');
              }}
            />
          </Right>
        </View>
        <View style={styles.listContainer}>
          <Icon
            active
            type="Ionicons"
            name="ios-key-outline"
            style={{marginRight: 15}}
          />
          <Text style={{fontSize: 19}}>Change Password</Text>
          <Right>
            <Icon
              type="Entypo"
              name="chevron-right"
              onPress={() => {
                navigation.navigate('Change Password');
              }}
            />
          </Right>
        </View>
        <View style={styles.listContainer}>
          <Icon
            active
            type="Ionicons"
            name="settings-outline"
            style={{marginRight: 15}}
          />
          <Text style={{fontSize: 19}}>Settings</Text>
          <Right>
            <Icon
              type="Entypo"
              name="chevron-right"
              onPress={() => {
                navigation.navigate('Change Password');
              }}
            />
          </Right>
        </View>
      </Content>
    </Container>
  );
};

export default Settings;
