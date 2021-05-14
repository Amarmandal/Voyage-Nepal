import React from 'react';
import {Image, useWindowDimensions, ImageBackground} from 'react-native';
import {View, Text, Item, Icon, Button} from 'native-base';

const Profile = () => {
  const imageWidth = useWindowDimensions().width;
  const imageHeight = Math.round((imageWidth * 5304) / 7426);

  return (
    <View style={{flex: 1, alignItems: 'flex-start'}}>
      <ImageBackground
        source={require('../../assets/pictures/background.jpg')}
        style={{
          height: imageHeight,
          width: imageWidth,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/pictures/face.jpg')}
          style={{
            width: 175,
            height: 175,
            borderRadius: 400 / 2,
            overlayColor: 'transparent',
          }}
        />
      </ImageBackground>
      <View style = {{margin: 30}}>
        <Button transparent iconLeft>
          <Icon name="search" />
          <Text uppercase={false}>My trips</Text>
        </Button>
        <Button transparent iconLeft>
          <Icon name="search" />
          <Text uppercase={false}>My bookings</Text>
        </Button>
        <Button transparent iconLeft>
          <Icon name="search" />
          <Text uppercase={false}>Travel Guides</Text>
        </Button>
        <Button transparent iconLeft>
          <Icon name="search" />
          <Text uppercase={false}>Favorites</Text>
        </Button>
        <Button transparent iconLeft>
          <Icon name="search" />
          <Text uppercase={false}>Share</Text>
        </Button>
        <Button transparent iconLeft>
          <Icon name="search" />
          <Text uppercase={false}>Help and support</Text>
        </Button>
        <Button transparent iconLeft>
          <Icon name="search" />
          <Text uppercase={false}>settings</Text>
        </Button>
        
      </View>
    </View>
  );
};

export default Profile;
