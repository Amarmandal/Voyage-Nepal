import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Root} from 'native-base';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';
import {checkConnected} from './utils/InternetConnection/Internet'
import NoInternetScreen from './screens/NoInternetScreen';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const [connectStatus, setConnectStatus] = useState(true)
  useEffect(() => {
    NetInfo.addEventListener((state) => {
      // console.log('network state change:', state);
      // console.log('Connection type', state.type);
      setConnectStatus(state.isInternetReachable)
    });
  }, [])

  return (
    connectStatus === true ? (
    <Provider store={store}>
      <Root>
        <AppNavigator />
      </Root>
    </Provider>) : <NoInternetScreen />
  );
};

export default App;
