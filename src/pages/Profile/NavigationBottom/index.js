import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Heart, Home, IconUser} from '../../../assets';

const NavigationBottom = () => {
  return (
    <View style={styles.bottomNavigate}>
      <View style={styles.iconUser}>
        <TouchableOpacity activeOpacity={0.7}>
          <IconUser />
          <Text style={styles.profileText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconHome}>
        <TouchableOpacity activeOpacity={0.7}>
          <Home />
          <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconHeart}>
        <TouchableOpacity activeOpacity={0.7}>
          <Heart />
          <Text style={styles.heartText}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationBottom;

const styles = StyleSheet.create({
  bottomNavigate: {
    backgroundColor: 'white',
    height: 87,
    borderRadius: 5,
    marginTop: 299,
    flexDirection: 'row-reverse',
  },
  iconUser: {
    alignItems: 'center',
    width: 125,
    marginVertical: 10,
  },
  profileText: {
    fontSize: 10,
  },
  iconHome: {
    width: 125,
    alignItems: 'center',
    marginVertical: 5,
  },
  homeText: {
    fontSize: 10,
  },
  iconHeart: {
    width: 125,
    alignItems: 'center',
    marginVertical: 8,
  },
  heartText: {
    fontSize: 10,
  },
});
