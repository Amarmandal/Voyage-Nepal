import React, {useEffect} from 'react';
import {useWindowDimensions} from 'react-native';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  ScrollableTab,
} from 'native-base';
import ImageDetail from '../../../Components/Home/Explore/ImageDetail';
import places from '../../../constants/places';
import Detail from '../../../Components/Home/Explore/Detail';
import Review from '../../../Components/Home/Explore/Review';
import Hotel from '../../../Components/Home/Explore/Hotel';
import Colors from '../../../constants/Color';
const Details = ({navigation, route}) => {
  // useEffect(() => {
  //    console.log(places[0]);
  // }, [])
  const {image, location, name, details} = route.params;
  const imageWidth = useWindowDimensions().width;

  return (
    <Container>
      <Header
        style={{
          height: 300,
          width: imageWidth,
          backgroundColor: Colors.themeColor,
        }}>
        <ImageDetail image={image} location={location} name={name} />
      </Header>

      <Tabs
        transparent
        renderTabBar={() => (
          <ScrollableTab
            tabsContainerStyle={{backgroundColor: Colors.themeColor}}
            underlineStyle={{backgroundColor: Colors.warning}}
          />
        )}>
        <Tab
          heading="Details"
          tabStyle={{backgroundColor: Colors.themeColor}}
          textStyle={{color: '#fff', opacity: 0.8}}
          activeTabStyle={{backgroundColor: Colors.themeColor}}
          activeTextStyle={{color: '#fff', fontSize: 22}}
          >
          <Detail details={details} />
        </Tab>
        <Tab
          heading="Review"
          tabStyle={{backgroundColor: Colors.themeColor}}
          textStyle={{color: '#fff', opacity: 0.8}}
          activeTabStyle={{backgroundColor: Colors.themeColor}}
          activeTextStyle={{color: '#fff', fontSize: 22}}>
          <Review />
        </Tab>
        <Tab
          heading="Hotels"
          tabStyle={{backgroundColor: Colors.themeColor}}
          textStyle={{color: '#fff', opacity: 0.8}}
          activeTabStyle={{backgroundColor: Colors.themeColor}}
          activeTextStyle={{color: '#fff', fontSize: 22}}>
          <Hotel />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Details;
