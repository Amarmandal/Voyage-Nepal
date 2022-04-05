import React from 'react'
import { View, Text } from 'react-native'
import {Icon} from 'native-base'

const CreatePlans = () => {
  return (
    <View>
      <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 20,
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>My Plans</Text>
          <Icon
            type="AntDesign"
            name="pluscircle"
            color="#000"
            size={28} onPress = {() => navigation.navigate('CreateTrip')}></Icon>
        </View>
    </View>
  )
}

export default CreatePlans