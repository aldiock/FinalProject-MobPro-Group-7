import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';
import {AddKost, HomeScreenMitra} from './pages';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
    // <AddKost />
    // <HomeScreenMitra />
  );
};

export default App;
