import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {
  Container,
  Content,
  Item,
  Input,
  H2,
  Icon,
  Button,
  H1,
} from 'native-base';
import Colors from '../../../constants/Color';
import {useSelector} from 'react-redux';
import api from '../../../services/ApiServices'
var FormData = require('form-data');
import * as ImagePicker from 'react-native-image-picker';

var data = new FormData();

const AboutMe = ({navigation}) => {
  const state = useSelector(state => state.loginUser);
  const detail = useSelector(state => state.userDetails)
  const [filePath, setFilePath] = useState({})

  const selectFile = async () => {
    ImagePicker.launchImageLibrary({
      mediaType: 'photo',
    }, (response) => {
      console.log('Response = ', response);
      data.append('photo', {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
        size: response.assets[0].fileSize
      });
      var config = {
        method: 'post',
        url: `/upload/photo/${state.user.userData.id}`,
        headers: { 
          'Authorization': `Bearer ${state.user.token}`, 
          'Accept': 'application/json',
          'Cookie': `token=${state.user.token}`,
        },
        data : data
      };

      var config1 = {
        method: 'put',
        url: `/update/photo/${state.user.userData.id}`,
        headers: { 
          'Authorization': `Bearer ${state.user.token}`, 
          'Accept': 'application/json',
          'Cookie': `token=${state.user.token}`,
        },
        data : data
      };

      if(!detail.userDetail.profileImgURL){
        api(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log('success!');
      })
      .catch(function (error) {
        console.log(error);
        console.log('upload error');
      });
      } else if(detail.userDetail.profileImgURL) {
        api(config1)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log('update success!');
      })
      .catch(function (error) {
        console.log(error);
        console.log('update error');
      });
      }

      
      

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        );
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
  
  };

  return (
    <Container style={{backgroundColor: '#ffffff'}}>
      <Button transparent onPress={() => navigation.goBack()} large>
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
        {detail.userDetail.profileImgURL ? <Image source={{uri: detail.userDetail.profileImgURL}} style={{width: 140, height: 140, marginBottom: 10, borderRadius: 80}} /> : <Image
            source={require('../../../assets/pictures/user.png')}
            style={{width: 130, height: 130, marginBottom: 10}}></Image>}
        <View>
          <H2>Profile</H2>
          <Text style={{color: Colors.warning}} onPress={() => selectFile()}>
            Change Picture
          </Text>
        </View>
      </View>
      <Image
          source={{uri: filePath.uri}}
        />
      
      <Content style={{margin: 20, marginLeft: 40}}>
        <H1 style={{fontSize: 23, fontWeight: '900', color: '#000000'}}>
          Name
        </H1>
        <Item style={{marginBottom: 25}}>
          <Input
            disabled
            placeholder={state.user.userData.name}
            style={{fontSize: 20, fontWeight: '600'}}
          />
        </Item>
        <H1 style={{fontSize: 23, fontWeight: '900', color: '#000000'}}>
          Email
        </H1>
        <Item style={{marginBottom: 25}}>
          <Input
            disabled
            placeholder={state.user.userData.email}
            style={{fontSize: 20, fontWeight: '600'}}
          />
        </Item>
        <H1 style={{fontSize: 23, fontWeight: '900', color: '#000000'}}>
          Date of Birth
        </H1>
        <Item style={{marginBottom: 25}}>
          <Input
            disabled
            placeholder="1999-02-28"
            style={{fontSize: 20, fontWeight: '600'}}
          />
        </Item>
        <H1 style={{fontSize: 23, fontWeight: '900', color: '#000000'}}>
          Address
        </H1>
        <Item style={{marginBottom: 25}}>
          <Input
            disabled
            placeholder={state.user.userData.city}
            style={{fontSize: 20, fontWeight: '600'}}
          />
        </Item>
        <H1 style={{fontSize: 23, fontWeight: '900', color: '#000000'}}>
          Gender
        </H1>
        <Item style={{marginBottom: 35}}>
          <Input
            disabled
            placeholder={state.user.userData.gender}
            style={{fontSize: 20, fontWeight: '600'}}
          />
        </Item>
      </Content>
    </Container>
  );
};

export default AboutMe;
