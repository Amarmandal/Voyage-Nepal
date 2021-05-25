import React from 'react';
import {Text, View,StyleSheet, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Evaluation from './Evaluation';

export default function FeaturedPlaces() {
  const listOfPlaces = [
    {
      title: 'Swayambhu',
      imgPath: require('../../../assets/pictures/swayambhu.jpg'),
    },
    {
      title: 'Janki Mandir',
      imgPath: require('../../../assets/pictures/janakpur.jpg'),
    },
    {
      title: 'Palpa',
      imgPath: require('../../../assets/pictures/Palpa.jpg'),
    },
    {
      title: 'Pokhara',
      imgPath: require('../../../assets/pictures/Pokhara.jpg'),
    },
  ];
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <Text
          style={{
            flex: 1,
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          Featured places
        </Text>
        <Text
          style={{
            color: '#3498db',
            fontWeight: 'bold',
          }}>
          View All
        </Text>
      </View>
    
      <View>
        <FlatList
          horizontal
          keyExtractor={(item) => item.title}
          data={listOfPlaces}
          renderItem={({item}) => {
            return (
              <View
                style={Styles.cardView}
               >
                <View
                  style={{
                    position: 'absolute',
                  }}>
                  <Image
                    source={item.imgPath}
                    style={Styles.ImageView}
                   
                  />
                  <View
                    style={{
                      backgroundColor: 'black',
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      opacity: 0.3,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    margin: 10,
                  }}>
                  <Text
                    style={Styles.TextStyle}
                    >
                    {item.title}
                  </Text>
                  <View>
                    <Evaluation rating={4} />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const Styles=StyleSheet.create({
      cardView: {
                  height: 220,
                  width: 150,
                  backgroundColor: 'red',
                  margin: 10,
                  borderRadius: 10,
                  //   alignItems: 'center',
                  //   justifyContent: 'center',
                  elevation: 2,
      },
      ImageView:{
        height: 220,
        width: 150,
        borderRadius: 10,
      },
      TextStyle: {
                      color: 'white',
                      //fontWeight: 'bold',
                      fontSize: 21,
      },
})