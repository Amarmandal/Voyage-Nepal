import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import SearchContainer from '../feed/searchContainer';
import Colors from '../../../constants/Color';
import places from '../../../constants/places';
const {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import api from '../../../services/ApiServices'

const TravelList = props => {
  const navigation = useNavigation();

  const [destinations, setDestinations] = useState()
  const [loc, setLoc] = useState()

  const category = useSelector(state => state.category);
  const state = useSelector(state => state.loginUser)

  useEffect(async() => {
    await fetchPlaces()
    console.log(destinations[0].stayPlace);
    
  }, [])

  const fetchPlaces = async() => {
    var config = {
      method: 'get',
      url: '/places',
      headers: { 
        'Authorization': `Bearer ${state.user.token}`, 
        'Cookie': `token=${state.user.token}`
      }
    }

    await api(config)
    .then(res => {
      // console.log(res.data)
      setDestinations(res.data)
      // return(res.data)
    })
    .catch(err => console.log(err))

    return destinations;
  }

  const Card = ({place}) => {
    return (
      <View style={styles.card} key = {place._id}>
        <ImageBackground
          style={styles.cardImage}
          source={{uri: place.placePhoto}}></ImageBackground>
        <View style={styles.cardDetails}>
          <Text style={styles.cardText}>{place.name}</Text>
          <Text style={styles.location}>
            <Icon name="location-on" size={12} />
            'Kathmandu'
          </Text>
          <View style={styles.ratings}>
            <Icon name="star" size={20} />
            <Icon name="star" size={20} />
            <Icon name="star" size={20} />
            <Icon name="star" size={20} />
            <Icon name="star-half" size={20} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Explore Destinations </Text>
          <SearchContainer />
        </View>
        {category.map(category => (
          <View key={category.id}>
            <Text style={styles.activityText}>{category.name}</Text>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={destinations}
                keyExtractor={item => item._id}
                renderItem={({item}) => (
                  <Pressable
                    onPress={() =>
                      navigation.navigate('Details', {
                        image: item.placePhoto,
                        location: 'Kathmandu',
                        name: item.name,
                        details: 'Details',
                        reviews: item.reviews,
                        hotel: item.stayPlace,
                        id: item._id,
                        ratings: item.ratings
                      })
                    }>
                      {item.category.includes(category._id) ? <Card key = {item._id} place={item} /> : null}
                    
                  </Pressable>
                )}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TravelList;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    margin: 25,
    marginTop: 35,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  activityText: {
    fontSize: 22,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 25,
    marginBottom: 25,
    marginTop: 25,
  },
  card: {
    height: 300,
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
    marginBottom: 30,
  },
  cardImage: {
    height: 180,
    width: width / 2,
    marginRight: 20,
    marginTop: 3,
    padding: 10,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  recommendText: {
    fontSize: 22,
    color: Colors.themeColor,
    marginTop: 10,
    fontWeight: 'bold',
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
    bottom: 30,
    padding: 5,
    marginLeft: 10,
    width: width / 2,
    justifyContent: 'space-between',
    borderBottomColor: 'black',
  },
  location: {
    fontSize: 13,
  },
  ratings: {
    flexDirection: 'row',
    marginTop: 2
  },
});
