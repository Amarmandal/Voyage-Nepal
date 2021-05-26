import React from 'react';
import {View,Text} from 'react-native'
import {HelloUser} from '../../../Components/Home/feed/Feed'
import {useSelector} from 'react-redux'

const Feed=()=>{
    const state = useSelector(state => state.loginUser)
    return(
        <View style = {{flex: 1, backgroundColor: '#ffffff'}}>
            <View style = {{margin: 20}}>
            <HelloUser name = {state.user.userData.name} />
            </View>
        </View>
    )
}

export default Feed;