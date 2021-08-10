import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import {Button, Card, CardItem, Left, Accordion, Icon} from 'native-base';
import {useSelector} from 'react-redux';
import {List} from 'react-native-paper';

const RandomPlaces = ({navigation}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [arrow, setArrow] = useState(false)

  const handlePress = () => setExpanded(!expanded);

  const places = useSelector(state => state.place);
  const [randPlaces, setRandPlaces] = useState();
  const [loading, setLoading] = useState(true);
  const newArray = [];
  useEffect(() => {
    const array = places.map(place => {
      return {
        title: place.name,
        photo: place.placePhoto,
        content: place.description,
        location: place.location
      };
    });
    for (var i = 0; i < 6; i++) {
      var random = array[Math.floor(Math.random() * 20)];
      newArray.push(random);
    }
    setRandPlaces(newArray);
    setLoading(false);
    // console.log(randPlaces);
  }, []);
  const displayPlace = () => {
    for (var i = 0; i < 6; i++) {
      var random = places[Math.floor(Math.random() * 20)];
      newArray.push(random);
      //   newArray.push({name: random.name, photo: random.placePhoto, description: random.description});
      //   console.log(random);
    }
    setRandPlaces(newArray);
    setLoading(false);
    // console.log(randPlaces);
  };

  const placeName = name => {
    const _place = name;
    const words = _place.split(' ');

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
    }

    return words.join(' ');
  };

  return (
    <View style={{marginBottom: 60}}>
      <Text
        style={{
          fontSize: 22,
          color: '#000000',
          fontWeight: 'bold',
          marginLeft: 25,
          marginBottom: 15,
        }}>
        Browse
      </Text>
      <ScrollView horizontal = {true}>
        {!loading
          ? randPlaces.map((place, index) => {
              return (
                <Card key={index} style={{marginBottom: 40}}>
                  <CardItem cardBody>
                    <Image
                      style={{width: '100%', height: 220}}
                      source={{
                        uri: place.photo,
                      }}></Image>
                  </CardItem>
                  <List.Section>
                    <List.Accordion
                      titleStyle = {{fontWeight: '600', fontSize: 18}}
                      style={{backgroundColor: '#ffffff', margin: -10}}
                      title={placeName(place.title)}>
                      <List.Item
                        style={{marginTop: -10}}
                        descriptionNumberOfLines={20}
                        description={place.location + ',' + '\n' + place.content }
                      />
                    </List.Accordion>
                  </List.Section>
                </Card>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

export default RandomPlaces;
