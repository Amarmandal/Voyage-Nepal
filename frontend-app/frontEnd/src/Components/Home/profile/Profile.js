import React from 'react';
import {Image, ImageBackground, useWindowDimensions} from 'react-native';
import {View, Text, Button, Icon} from 'native-base';

import profileStyles from './profile.styles';

export const Img = props => {
  const imageWidth = useWindowDimensions().width;
  const imageHeight = Math.round(imageWidth * (1105 / 2004));
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/pictures/bgMountains.jpg')}
        style={{
          height: imageHeight,
          width: imageWidth,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/pictures/face.jpg')}
          style={profileStyles.img}
        />
      </ImageBackground>
    </View>
  );
};

export const UserName = props => {
  return <Text style={profileStyles.userName}>{props.name}</Text>;
};

export const List = props => {
  return (
    <View style={{margin: 15, flexDirection: 'row', alignItems: 'center'}}>
      <Icon type={props.iconType} name={props.iconName} />
      <Text uppercase={false} style={profileStyles.listStyle}>
        {props.listName}
      </Text>
    </View>
  );
};

export const Divider = () => {
  return <View style={profileStyles.divider} />;
};

export const SignOut = props => {
  return (
    <View style={profileStyles.signoutContainer}>
      <Button transparent onPress={props.signOut}>
        <Icon type="MaterialIcons" name="logout" style={{color: '#000000'}} />
        <Text style={profileStyles.signoutText}>Signout</Text>
      </Button>
    </View>
  );
};
