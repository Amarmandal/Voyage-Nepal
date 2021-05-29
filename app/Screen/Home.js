import React from 'react'
import {StyleSheet,SafeAreaView,Text, ScrollView} from 'react-native';
import Header from '../Components/Home/header'
import Popular from '../Components/Home/Popular';
import SearchContainer from '../Components/Home/searchContainer';

const Home=({navigation})=>{
    return(
    <SafeAreaView style={{flex:1, padding:20,backgroundColor:'white'}}>
    <ScrollView showsVerticalScrollIndicator={false}>
     <Header/>
     <SearchContainer /> 
       <Popular />
    </ScrollView>

    </SafeAreaView>
    )
}

export default Home;