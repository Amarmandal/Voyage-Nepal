import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content, Icon, Right, Button} from 'native-base';

const Settings = ({navigation}) => {
  return (
    <Container>
      <Button transparent onPress={() => navigation.goBack()} large>
        <Icon name="arrow-back" style={{color: '#52c0b4', fontSize: 25}} />
      </Button>
      <Content style={{ margin: 25, marginTop: 0}}>
        <View style={styles.listContainer}>
          <Icon active type="Feather" name="user" style={{marginRight: 15}} />
          <Text style={{fontSize: 19}}>FAQ</Text>
          <Right>
            <Icon
              type="Entypo"
              name="chevron-right"
              onPress={() => {
                navigation.navigate('FAQ');
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
          <Text style={{fontSize: 19}}>Terms & Condition</Text>
          <Right>
            <Icon
              type="Entypo"
              name="chevron-right"
              onPress={() => {
                navigation.navigate('Terms');
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
          <Text style={{fontSize: 19}}>Privacy Policy</Text>
          <Right>
            <Icon
              type="Entypo"
              name="chevron-right"
              onPress={() => {
                navigation.navigate('Policy');
              }}
            />
          </Right>
        </View>
      </Content>
    </Container>
  );
};

export default Settings;

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginBottom: 15,
  },
});

