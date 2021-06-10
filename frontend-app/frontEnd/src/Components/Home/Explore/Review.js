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

const Review = props => {
  const navigation = useNavigation();

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
        <Card>
          {props.reviews.map(review => (
            <CardItem bordered key={review.user._id}>
              <Body style={{marginBottom: 20, flexDirection: 'row'}}>
                <Thumbnail
                  large
                  source={{uri: review.user.profileImgURL}}
                  style={{width: 80, height: 80, marginRight: 10}}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: Colors.themeColor,
                      marginBottom: 10,
                      fontWeight: 'bold',
                    }}>
                    {review.user.name}
                    {/* name */}
                  </Text>
                  {review.reviewText !== '' ? (
                    <Text note style={{fontSize: 18, marginBottom: 5}}>
                      {review.reviewText}
                      {/* review */}
                    </Text>
                  ) : null}

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
                </View>
              </Body>
            </CardItem>
          ))}
        </Card>
      </Content>
    </Container>
  );
};

export default Review;
