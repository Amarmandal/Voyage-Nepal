import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import Colors from '../../../constants/Color';

const ViewPlans = props => {
  const imageWidth = useWindowDimensions().width;
  return (
    <View>
      <View style = {{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center'}}>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>My Plans</Text>
        <PlusIcon name="pluscircle" color="#000" size={28}></PlusIcon>
      </View>
      <ImageBackground
        style={[style.headerImage, {width: imageWidth}]}
        source={require('./baudhanathStupa.jpg')}>
        <View style={style.header}>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Place Name
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Icon name="place" color="#000" size={28} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#000',
                  marginTop: 5,
                }}>
                Kathmandu
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ViewPlans;

const style = StyleSheet.create({
  headerImage: {
    height: 250,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
