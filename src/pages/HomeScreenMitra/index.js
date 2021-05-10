import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconTambahKost} from '../../assets';
import {Header, KostCard} from '../../components';
import firebase from '../../config/Firebase';

const HomeScreenMitra = ({navigation}) => {
  const [dataKost, setDataKost] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref('mitraKost')
      .on('value', res => {
        if (res.val()) {
          //Ubah data jadi Array
          const rawData = res.val();
          const mitraKostArr = [];
          Object.keys(rawData).map(item => {
            mitraKostArr.push({
              id: item,
              ...rawData[item],
            });
          });
          setDataKost(mitraKostArr);
        }
      });
  }, []);

  console.log(dataKost);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Header greetings="Good afternoon Users," />

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('AddKost');
          }}>
          <IconTambahKost />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.TextBiasa}>My Own List Kost</Text>
          {dataKost.map(item => (
            <KostCard
              key={item.id}
              imageKost={item.photo}
              namaKost={item.kostName}
              alamat={item.address}
              kostPrice={item.kostPrice}
              tipeKost={item.tipeKost.value}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#525252',
  },
  mainContent: {
    marginTop: 12,
    flex: 1,
    marginHorizontal: 22,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 22,
  },
  TextBiasa: {
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreenMitra;
