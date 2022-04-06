import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Root} from 'native-base';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';
import NetInfo from '@react-native-community/netinfo';
import Colors from './constants/Color';

const App = () => {
  const [connectStatus, setConnectStatus] = useState(true);
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setConnectStatus(state.isInternetReachable);
    });
  }, []);


  // return connectStatus === true ? (
  //   <Provider store={store}>
  //     <Root>
  //       <StatusBar backgroundColor={Colors.themeColor} />
  //       <AppNavigator />
  //     </Root>
  //   </Provider>
  // ) : (
  //   <NoInternetScreen />
  // );
  return(
    <Provider store={store}>
      <Root>
        <StatusBar backgroundColor={Colors.themeColor} />
        <AppNavigator />
      </Root>
    </Provider>
  )
};

export default App;
