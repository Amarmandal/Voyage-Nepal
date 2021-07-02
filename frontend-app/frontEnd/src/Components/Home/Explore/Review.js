import React, {useState, useEffect} from 'react';
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
  Item,
  Input,
  Button,
  H3,
  Toast,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../constants/Color';
import StarRating from 'react-native-star-rating';
import LinearGradient from 'react-native-linear-gradient';
import api from '../../../services/ApiServices';
import {useSelector, useDispatch} from 'react-redux';
import {userReviews} from '../../../redux/action/userActivity/review'

const Review = ({reviews, placeId}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch()

  const state = useSelector(state => state.loginUser);

  const [starCount, setStarCount] = useState(0);
  const [review, setReview] = useState('');

  // const [userReviews, setUserReviews] = useState(reviews)
  // console.log(userReviews);

  // useEffect(() => {
  //   setUserReviews(reviews)
  // }, [dispatch])


  const onStarRatingPress = rating => {
    // console.log(rating);
    setStarCount(rating);
  };
// console.log(reviews);
  const handleChange = text => {
    // console.log(text);
    setReview(text);
    // console.log(review);
  };

  const data = {
    review: review, 
    starCount: starCount
  }

  const handleSubmit = () => {
    dispatch(userReviews(data))
  }

  return (
    <Container>
      <Content showsVerticalScrollIndicator={false}>
        <Text style={{margin: 20, fontWeight: 'bold'}}>
          Any reviews about this place?
        </Text>

        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#00fcde', '#617170']}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginBottom: 25,
            marginLeft: 20,
            marginRight: 20,
          }}>
          <View
            style={{
              height: 350,
              justifyContent: 'center',
              marginLeft: 25,
              marginRight: 25,
            }}>
            <Item
              rounded
              style={{
                marginBottom: 20,
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: '#ffffff',
              }}>
              <Input
                placeholder="Your Review Here"
                onChangeText={text => handleChange(text)}
                // onFocus={() => setShowList(true)}
                // onBlur={() => setShowList(false)}
              />
            </Item>
            <H3
              style={{
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: 10,
                alignSelf: 'center',
                opacity: 0.98,
                marginTop: 25,
              }}>
              Rate this place
            </H3>
            <View
              style={{
                backgroundColor: '#ffffff',
                height: 1,
                marginBottom: 10,
                opacity: 0.7,
              }}></View>
            <View
              style={{
                marginLeft: 38,
                marginRight: 38,
                marginTop: 20,
                marginBottom: 20,
              }}>
              <StarRating
                disabled={false}
                emptyStar={'star-o'}
                fullStar={'star'}
                halfStar={'star-half-empty'}
                iconSet={'FontAwesome'}
                maxStars={5}
                rating={starCount}
                selectedStar={rating => onStarRatingPress(rating)}
                fullStarColor={Colors.warning}
                emptyStarColor={'white'}
                starSize={35}
              />
            </View>

            <Button
              style={{alignSelf: 'center', marginTop: 20}}
              full
              warning
              rounded
              onPress={() => handleSubmit()}>
              <Text uppercase={false} style={{fontSize: 18}}>
                Submit
              </Text>
            </Button>
          </View>
        </LinearGradient>

        <Text style={{margin: 20, fontWeight: 'bold'}}>
          See Other's Reviews
        </Text>
        <Card>
          {reviews.map(review => (
            <CardItem bordered key={review.user._id}>
              <Body
                style={{
                  marginBottom: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Thumbnail
                  large
                  source={{uri: review.user.profileImgURL}}
                  style={{width: 60, height: 60, marginRight: 15}}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: Colors.themeColor,
                      paddingBottom: 6,
                      fontWeight: 'bold',
                    }}>
                    {review.user.name}
                  </Text>
                  {review.reviewText !== '' ? (
                    <Text style={{fontSize: 18, marginBottom: 5}}>
                      {review.reviewText}
                    </Text>
                  ) : null}
                  {review.rating ? (
                    <View
                    style={{
                      alignItems: 'flex-start'
                    }}>
                    <StarRating
                      disabled={false}
                      emptyStar={'star-o'}
                      fullStar={'star'}
                      halfStar={'star-half-empty'}
                      iconSet={'FontAwesome'}
                      maxStars={5}
                      rating={review.rating}
                      fullStarColor={Colors.warning}
                      emptyStarColor={'white'}
                      starSize={20}
                    />
                  </View>
                  ) : null}
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
