import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeScreen} from './pages';

const App = () => {
  return (
    <View style={styles.screen}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#525252',
  },
  mainContent: {
    marginTop: 12,
    flex: 1,
    marginHorizontal: 22,
    // backgroundColor: 'white',
  },
});
