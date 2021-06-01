import React from 'react';
// import { View, Text } from 'react-native'
import {
  View,
  H1,
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Right,
  Left,
  Body,
  Accordion,
  Input,
  Item
} from 'native-base';
import Colors from '../../../constants/Color'
import LinearGradient from 'react-native-linear-gradient';
const HotelScreen = ({navigation}) => {
  return (
    <Container style = {{backgroundColor: '#ffffff'}}>
      <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#87f3e6', '#617170']} style = {{alignItems: 'center', justifyContent: 'center',  borderBottomEndRadius: 15}}>
        <View style = {{height: 200, alignItems: 'center', justifyContent: 'center', marginLeft: 25, marginRight: 25, borderBottomEndRadius: 15}}>
        <Text style = {{fontSize: 20, color: '#ffffff', marginBottom: 10}}>Hotel Search </Text>
        <Item rounded style = {{backgroundColor: '#ffffff'}}>
        <Input placeholder = 'Find Hotels'></Input>
        <Icon name = 'search' style = {{color: 'gray'}} />
        </Item>
        
        </View>
        
      </LinearGradient>
      <Content padder style={{margin: 15}} showsVerticalScrollIndicator = {false}>
        
        <CardItem bordered button onPress = {() => navigation.navigate('Map')}>
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
};

export default HotelScreen;
