import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {IconSearch} from '../../../assets';

const SearchBar = ({...props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput style={styles.input} {...props} />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.iconSearch}
          {...props}>
          <IconSearch />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 310,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    height: 48,
    elevation: 10,
    paddingHorizontal: 28,
  },
  search: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 22,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  iconSearch: {
    padding: 10,
    marginRight: 8,
    borderRadius: 22,
  },
});

export default SearchBar;
