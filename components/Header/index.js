import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({greetings}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{greetings}</Text>
      <Text style={styles.title}>Welcome Back</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 22,
    marginVertical: 20,
    backgroundColor: '#525252',
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
