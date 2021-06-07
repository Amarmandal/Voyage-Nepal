import React from 'react';
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

const TravelList = props => {
  const navigation = useNavigation();
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
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Explore Destinations </Text>
          <SearchContainer />
        </View>

        <View>
          <Text style={styles.activityText}>Hiking</Text>

          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={places}
              renderItem={({item}) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate('Details', {
                      image: item.images,
                      location: item.location,
                      name: item.name,
                      details: item.details
                    })
                  }>
                  <Card place={item} />
                </Pressable>
              )}
            />
          </View>
        </View>
        <View>
          <Text style={styles.activityText}>Adventures</Text>
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
          <Text style={styles.activityText}>Historical Places</Text>
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
          <Text style={styles.activityText}>Fun</Text>
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
          <Text style={styles.activityText}>Party</Text>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={places}
              renderItem={({item}) => <Card place={item} />}
            />
          </View>
        </View>
        <View style={{marginBottom: 100}}>
          <Text style={styles.activityText}>Religious</Text>
          <View>
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
    marginBottom: 30,
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
