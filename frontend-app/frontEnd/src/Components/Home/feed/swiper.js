import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {SafeAreaView} from 'react-navigation';

const Carousel = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.sliderContainer}>
        <Swiper height={210} autoplay>
          <View style={styles.slide}>
            <Image
              source={{uri: 'https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/persuasive-ads-coca-cola.jpg?KTsOhkxK0tMNQhC6uiCg.4HgX4HKkyac&itok=rk_Z0ERK'}}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={{uri: 'https://www.advertgallery.com/wp-content/uploads/2017/12/make-my-trip-flat-25-cash-back-on-taj-hotels-ad-times-of-india-ahmedabad-14-12-2017.png'}}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={{uri: 'http://www.bhubaneswarbuzz.com/wp-content/uploads/2018/01/Wyndham-hotels-bhubaneswarbuzz.jpg'}}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={{uri: 'https://www.johornow.com/wp-content/uploads/sites/2/2017/08/Malaccas-Very-Own-Tube-Hotel-min.jpg'}}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
    </SafeAreaView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 240,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
});
