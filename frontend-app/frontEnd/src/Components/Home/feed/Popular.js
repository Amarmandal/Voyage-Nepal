import React from 'react';
import {
  FlatList,
  ScrollView,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../../../constants/Color';
import places from '../../../constants/places';
const {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';

const Popular = ({navigation}) => {
  const Card = ({place}) => {
    return (
      <View style={styles.card}>
        <ImageBackground
          style={styles.cardImage}
          source={place.images}></ImageBackground>
        <View style={styles.cardDetails}>
          <Text style={styles.cardText}>{place.name}</Text>
          <Text style={styles.location}>
            <Icon name="location-on" size={12} />
            {place.location}{' '}
          </Text>
          <View style={styles.ratings}>
            <Icon name="star" size={15} />
            <Icon name="star" size={15} />
            <Icon name="star" size={15} />
            <Icon name="star" size={15} />
            <Icon name="star-half" size={15} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{paddingTop: 10, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.headingText}>Popular Destinations</Text>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => <Card place={item} />}
          />
        </View>

        <View>
          <View>
            <Text style={styles.recommendText}>Recommended For You</Text>
          </View>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={places}
              renderItem={({item}) => <Card place={item} />}
            />
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.recommendText}>Recommended For You</Text>
          </View>
          <View style = {{marginBottom: 100}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={places}
              renderItem={({item}) => <Card place={item} />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Popular;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 15,
  },
  card: {
    height: 250,
    width: width / 1.8,
    padding: 10,
    shadowColor: '#000000',
    borderColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    marginRight: 9,
    marginLeft: 25, 
    marginBottom: 25
  },
  cardImage: {
    height: 180,
    width: width / 2,
    marginRight: 20,
    marginTop: 10,
    padding: 10,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  recommendText: {
    fontSize: 22,
    color: '#000000',
    marginTop: 40,
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 15
  },
  cardText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDetails: {
    height: 70,
    borderRadius: 0,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    padding: 5,
    marginLeft: 10,
    width: width / 2,
    position: 'absolute',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
  },
  location: {
    fontSize: 13,
  },
  ratings: {
    flexDirection: 'row',
  },
});
