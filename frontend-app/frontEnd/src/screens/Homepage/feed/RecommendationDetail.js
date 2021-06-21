import React, {useEffect} from 'react';
import {useWindowDimensions, View} from 'react-native';
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
  DefaultTabBar
} from 'native-base';
import ImageDetail from '../../../Components/Home/Explore/ImageDetail';
import places from '../../../constants/places';
import Detail from '../../../Components/Home/Explore/Detail';
import Review from '../../../Components/Home/Explore/Review';
import Hotel from '../../../Components/Home/feed/Hotel';
import Colors from '../../../constants/Color';
const RecommendationDetail = ({navigation, route}) => {
  const {image, location, name, details, reviews, hotel, id, ratings} =
    route.params;
  const imageWidth = useWindowDimensions().width;

  const renderTabBar = (props) => {
    props.tabStyle = Object.create(props.tabStyle);
    return <DefaultTabBar {...props} />;
  };

  return (
    <Container>
      
      <Header
        style={{
          height: 250,
          width: imageWidth,
          backgroundColor: Colors.themeColor,
        }}>
        <ImageDetail image={{uri: image}} location={location} name={name} />
      </Header>

      <Tabs
        transparent
        renderTabBar={renderTabBar}>
        <Tab
          heading="Details"
          tabStyle={{backgroundColor: Colors.themeColor}}
          textStyle={{color: '#fff', opacity: 0.8}}
          activeTabStyle={{backgroundColor: Colors.themeColor}}
          activeTextStyle={{color: '#fff', fontSize: 22}}>
          <Detail details={details} />
        </Tab>
        <Tab
          heading="Review"
          tabStyle={{backgroundColor: Colors.themeColor}}
          textStyle={{color: '#fff', opacity: 0.8}}
          activeTabStyle={{backgroundColor: Colors.themeColor}}
          activeTextStyle={{color: '#fff', fontSize: 22}}>
          <Review reviews = {reviews} placeId = {id} />
        </Tab>
        <Tab
          heading="Hotels"
          tabStyle={{backgroundColor: Colors.themeColor}}
          textStyle={{color: '#fff', opacity: 0.8}}
          activeTabStyle={{backgroundColor: Colors.themeColor}}
          activeTextStyle={{color: '#fff', fontSize: 22}}>
          <Hotel hotels = {hotel} id = {id} />
        </Tab>
      </Tabs>

     
          </Container>
  );
};

export default RecommendationDetail;