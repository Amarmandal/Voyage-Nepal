import React, { Component } from 'react';
import {View,Container,Content,Text,CardItem,Thumbnail,Icon,Left,Body, Input,Item } from 'native-base';
import Colors from '../../../constants/Color'
import { useNavigation } from '@react-navigation/native';
 const Hotel=()=> {
    const navigation = useNavigation();
    return (
      <Container>
        <Content padder style={{margin: 15}} showsVerticalScrollIndicator = {false}>
        
        <CardItem bordered button onPress = {() => navigation.navigate('HotelScreen', {screen: 'Map'})}>
          <Left>
            <Thumbnail
              source={require('../../../assets/pictures/hotel1.png')}
              style={{
                width: 115,
                height: 115,
                marginLeft: -12,
                marginRight: 10,
                borderRadius: 0
              }}></Thumbnail>
            <Body>
              <Text style = {{fontSize: 22}}>Hotel Annapurna</Text>
              <Text note style = {{fontSize: 18}}>Kathmandu, Durbar Marg</Text>
              
                <View style = {{flexDirection: 'row'}}>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star-half-empty" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star-o" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                </View>
            </Body>
          </Left>
        </CardItem>
        <CardItem bordered>
          <Left>
            <Thumbnail
              source={require('../../../assets/pictures/hotel2.png')}
              style={{
                width: 115,
                height: 115,
                marginLeft: -12,
                borderRadius: 0,
                marginRight: 10
              }}></Thumbnail>
            <Body>
              <Text style = {{fontSize: 22}}>Hotel Annapurna</Text>
              <Text note style = {{fontSize: 18}}>Kathmandu, Durbar Marg</Text>
              
                <View style = {{flexDirection: 'row'}}>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star-half-empty" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star-o" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                </View>
            </Body>
          </Left>
        </CardItem>
        
        <CardItem bordered>
          <Left>
            <Thumbnail
              source={require('../../../assets/pictures/hotel3.png')}
              style={{
                width: 115,
                height: 115,
                marginLeft: -12,
                borderRadius: 0,
                marginRight: 10
              }}></Thumbnail>
            <Body>
              <Text style = {{fontSize: 22}}>Hotel Annapurna</Text>
              <Text note style = {{fontSize: 18}}>Kathmandu, Durbar Marg</Text>
              
                <View style = {{flexDirection: 'row'}}>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star-half-empty" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star-o" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                </View>
            </Body>
          </Left>
        </CardItem>
        
        <CardItem bordered style = {{marginBottom: 23}}>
          <Left>
            <Thumbnail
              source={require('../../../assets/pictures/hotel1.png')}
              style={{
                width: 116,
                height: 116,
                marginLeft: -12,
                borderRadius: 0,
                marginRight: 10
              }}></Thumbnail>
            <Body>
              <Text style = {{fontSize: 22}}>Hotel Annapurna</Text>
              <Text note style = {{fontSize: 18}}>Kathmandu, Durbar Marg</Text>
              
                <View style = {{flexDirection: 'row'}}>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star-half-empty" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                  <Icon type="FontAwesome" name="star-o" style = {{color: Colors.warning, marginRight: 3, fontSize: 22}}/>
                </View>
            </Body>
          </Left>
        </CardItem>
        
      </Content>
      </Container>
    );
  }

export default Hotel;