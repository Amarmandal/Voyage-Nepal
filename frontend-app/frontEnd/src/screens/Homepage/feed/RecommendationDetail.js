import React, {useEffect} from 'react';
import {useWindowDimensions, View, ActivityIndicator} from 'react-native';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  ScrollableTab,
  Content,
  DefaultTabBar,
} from 'native-base';
import ImageDetail from '../../../Components/Home/Explore/ImageDetail';
import places from '../../../constants/places';
import Detail from '../../../Components/Home/Explore/Detail';
import Review from '../../../Components/Home/Explore/Review';
import Hotel from '../../../Components/Home/feed/Hotel';
import Colors from '../../../constants/Color';
import {useSelector} from 'react-redux';
const RecommendationDetail = ({navigation}) => {
  // const {image, location, name, details, reviews, hotel, id, ratings} =
  //   route.params;
  const state = useSelector(state => state.getPlaceById);
  const {loading, place, success, error} = state;
  // console.log(state);
  const imageWidth = useWindowDimensions().width;

  const placeName = () => {
    if (!loading && success) {
      const _place = place.name;
      const words = _place.split(' ');

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
      }

      // words.join(' ');
      // console.log(words);
      return words.join(' ');
    }
  };

  const renderTabBar = props => {
    props.tabStyle = Object.create(props.tabStyle);
    return <DefaultTabBar {...props} />;
  };

  return (
    <Container style = {{marginBottom: 30}}>
      <Header
        style={{
          height: 250,
          width: imageWidth,
          backgroundColor: Colors.themeColor,
        }}>
        {loading ? (
          <ActivityIndicator />
        ) : !loading && !success ? (
          console.log(error)
        ) : (
          <ImageDetail
            image={{uri: place.placePhoto}}
            location={place.location}
            name={placeName()}
          />
        )}
      </Header>

      <Tabs transparent renderTabBar={renderTabBar}>
        <Tab
          heading="Details"
          tabStyle={{backgroundColor: Colors.themeColor}}
          textStyle={{color: '#fff', opacity: 0.8}}
          activeTabStyle={{backgroundColor: Colors.themeColor}}
          activeTextStyle={{color: '#fff', fontSize: 22}}>
          <Detail
            details={
              loading ? (
                <ActivityIndicator color={Colors.themeColor} size="small" />
              ) : !loading && !success ? (
                console.log(error)
              ) : (
                place.description
              )
            }
          />
        </Tab>
        <Tab
          heading="Review"
          tabStyle={{backgroundColor: Colors.themeColor}}
          textStyle={{color: '#fff', opacity: 0.8}}
          activeTabStyle={{backgroundColor: Colors.themeColor}}
          activeTextStyle={{color: '#fff', fontSize: 22}}>
          <Review
            reviews={
              place.reviews
            }
            placeId={
              loading ? (
                <ActivityIndicator color={Colors.themeColor} size="small" />
              ) : !loading && !success ? (
                console.log(error)
              ) : (
                place._id
              )
            }
          />
        </Tab>
        <Tab
          heading="Hotels"
          tabStyle={{backgroundColor: Colors.themeColor}}
          textStyle={{color: '#fff', opacity: 0.8}}
          activeTabStyle={{backgroundColor: Colors.themeColor}}
          activeTextStyle={{color: '#fff', fontSize: 22}}>
          <Hotel
            hotels={
              place.stayPlace
            }
            id={
              loading ? (
                <ActivityIndicator color={Colors.themeColor} size="small" />
              ) : !loading && !success ? (
                console.log(error)
              ) : (
                place._id
              )
            }
          />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default RecommendationDetail;
