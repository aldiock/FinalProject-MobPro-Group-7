import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal as ModalRN,
} from 'react-native';
import {IconBell, IconFemale, IconMale} from '../../assets';
import {Button, Card, Gap, Header, KostCard, SearchBar} from '../../components';
import firebase from '../../config/Firebase';

const HomeScreen = () => {
  const [dataKost, setDataKost] = useState([]);
  const [selectedKost, setSelectedKost] = useState({
    key: 1,
    gambarKost: '',
    namaKost: '',
    alamat: '',
    hargaKost: '',
    tipeKost: '',
  });
  const [toggleModal, setToggleModal] = useState(false);
  const [render, setRender] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [resulted, setResulted] = useState([]);
  const [search, setSearch] = useState(false);

  const filterByName = () => {
    const result = dataKost.filter(item => item.namaKost === userInput);
    setResulted(result);
    if (userInput.length > 0) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

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
  return (
    <View style={{...styles.screen}}>
      <View style={styles.header}>
        <Header greetings="Good afternoon Clifford," />
        <TouchableOpacity activeOpacity={0.5}>
          <IconBell />
        </TouchableOpacity>
      </View>
      <SearchBar
        placeholder="Cari berdasarkan nama"
        onPress={() => {
          filterByName();
        }}
        onChangeText={text => setUserInput(text)}
      />
      <View style={styles.mainContent}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {search === false
            ? dataKost.map(item => (
                <KostCard
                  key={item.id}
                  gambarKost={item.photo}
                  namaKost={item.namaKost}
                  alamat={item.alamatKost}
                  hargaKost={item.hargaKost}
                  tipeKost={item.tipeKost.value}
                  onPress={() => {
                    setSelectedKost(item);
                    setRender(false);
                    console.log(selectedKost);
                    setToggleModal(!toggleModal);
                  }}
                />
              ))
            : resulted.map(item => (
                <KostCard
                  key={item.id}
                  gambarKost={item.photo}
                  namaKost={item.namaKost}
                  alamat={item.alamatKost}
                  hargaKost={item.hargaKost}
                  tipeKost={item.tipeKost.value}
                  onPress={() => {
                    setSelectedKost(item);
                    setRender(false);
                    console.log(selectedKost);
                    setToggleModal(!toggleModal);
                  }}
                />
              ))}
        </ScrollView>
      </View>
      <ModalRN transparent={true} animationType="fade" visible={toggleModal}>
        <View style={{flex: 1, backgroundColor: '#000000aa'}}>
          <TouchableOpacity
            style={{flex: 1}}
            activeOpacity={0.97}
            onPress={() => {
              setToggleModal(!toggleModal);
            }}>
            <Card
              style={{
                height: 210,
                width: 350,
                alignSelf: 'center',
                marginTop: 250,
                padding: 5,
              }}>
              <View
                style={{
                  ...styles.container,
                  justifyContent: 'space-between',
                  width: 380,
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    width: 190,
                  }}>
                  <View style={styles.containerGambarKost}>
                    <Image
                      style={styles.gambarKost}
                      source={require('../../assets/KostImage/kost.png')}
                    />
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    width: 190,
                  }}>
                  <Gap height={8} />
                  <Text style={styles.namaKost}>{selectedKost.namaKost}</Text>
                  <Gap height={17} />
                  {selectedKost.tipeKost.value === 1 ? (
                    <View>
                      <View style={{alignItems: 'center'}}>
                        <IconMale />
                      </View>
                      <Text style={styles.gender}>Laki-Laki</Text>
                    </View>
                  ) : (
                    <View>
                      <View style={{alignItems: 'center'}}>
                        <IconFemale />
                      </View>
                      <Text style={styles.gender}>Perempuan</Text>
                    </View>
                  )}
                  <Gap height={20} />
                  <Text style={styles.alamatKost}>
                    {selectedKost.alamatKost}
                  </Text>
                  <Gap height={6} />
                  <Text style={styles.hargaKost}>
                    {selectedKost.hargaKost}
                    <Text style={styles.month}>/month</Text>
                  </Text>
                </View>
              </View>
              <Button title="Book Now" style={{width: 320, marginTop: 10}} />
            </Card>
          </TouchableOpacity>
        </View>
      </ModalRN>
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
  container: {
    flexDirection: 'row',
    width: 340,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  namaKost: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gender: {
    fontSize: 9,
    textAlign: 'center',
  },
  alamatKost: {
    fontSize: 11,
    textAlign: 'center',
  },
  hargaKost: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  month: {
    fontWeight: '100',
  },
  gambarKost: {
    maxWidth: 120,
    height: 120,
    maxHeight: 120,
    borderRadius: 10,
  },
  containerGambarKost: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default HomeScreen;
