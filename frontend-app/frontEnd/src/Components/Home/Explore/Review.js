import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Thumbnail,
  Icon,
  View,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../constants/Color';

const Review = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
        <Card>
          <CardItem bordered>
            <Body>
              {/* <Thumbnail square large  source={require('../../../assets/pictures/face.jpg')} style={{width: 80, height: 80}}/> */}
              <Text style={{fontSize: 20, color: Colors.themeColor, marginBottom: 10}}>
                John Doe
              </Text>

              <Body>
                <Left>
                <Text note style={{fontSize: 18, marginBottom: 5}}>
                  Loreum ipsum Neque porro quisquam est qui dolorem{' '}
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <Icon
                    type="FontAwesome"
                    name="star"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star-half-empty"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star-o"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                </View>
                </Left>
                
              </Body>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              {/* <Thumbnail square large  source={require('../../../assets/pictures/face.jpg')} style={{width: 80, height: 80}}/> */}
              <Text style={{fontSize: 20, color: Colors.themeColor, marginBottom: 10}}>
                John Doe
              </Text>

              <Body>
                <Left>
                <Text note style={{fontSize: 18, marginBottom: 5}}>
                  Loreum ipsum Neque porro quisquam est qui dolorem{' '}
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <Icon
                    type="FontAwesome"
                    name="star"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star-half-empty"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star-o"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                </View>
                </Left>
                
              </Body>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              {/* <Thumbnail square large  source={require('../../../assets/pictures/face.jpg')} style={{width: 80, height: 80}}/> */}
              <Text style={{fontSize: 20, color: Colors.themeColor, marginBottom: 10}}>
                John Doe
              </Text>

              <Body>
                <Left>
                <Text note style={{fontSize: 18, marginBottom: 5}}>
                  Loreum ipsum Neque porro quisquam est qui dolorem{' '}
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <Icon
                    type="FontAwesome"
                    name="star"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star-half-empty"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                  <Icon
                    type="FontAwesome"
                    name="star-o"
                    style={{
                      color: Colors.warning,
                      marginRight: 3,
                      fontSize: 22,
                    }}
                  />
                </View>
                </Left>
                
              </Body>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default Review;
