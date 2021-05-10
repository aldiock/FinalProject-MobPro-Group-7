import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import RadioForm from 'react-native-simple-radio-button';
import {IconLogo, LogoUpload} from '../../assets';
import {Button, Card, Gap, Header, TextInput} from '../../components';
import firebase from '../../config/Firebase';

const AddKost = ({navigation}) => {
  const [kostName, setKostName] = useState('');
  const [address, setAddress] = useState('');
  const [kostPrice, setKostPrice] = useState('');
  const [tipeKost, setTipe] = useState('');

  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState('');

  const onSubmit = () => {
    const data = {
      kostName: kostName,
      address: address,
      kostPrice: kostPrice,
      tipeKost: tipeKost,
      photo: photoBase64,
    };
    console.log(data);
    firebase.database().ref('mitraKost').push(data);
  };

  const radio_props = [
    {label: 'Laki-Laki', value: 'Laki-Laki'},
    {label: 'Perempuan', value: 'Perempuan'},
  ];

  const getKostImage = () => {
    launchImageLibrary(
      {maxHeight: 120, maxWidth: 120, includeBase64: true},
      res => {
        if (res.didCancel) {
          setHasPhoto(false);
          showMessage({
            message: 'Upload foto dibatalkan',
            type: 'default',
            backgroundColor: '#09435E',
            color: 'white',
          });
        } else {
          setPhoto(res.uri);
          setPhotoBase64(res.base64);
          setHasPhoto(true);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={styles.logo}>
          <IconLogo />
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.textAreaWrapper}>
        <Header greetings="Good afternoon Users," style={styles.customHeader} />
        <Text style={styles.textBiasa}>Add Kost</Text>
      </View>
      <Card style={styles.card}>
        <Gap height={20} />
        <TouchableOpacity activeOpacity={0.7} onPress={getKostImage}>
          {hasPhoto && <Image source={{uri: photo}} />}
          <View style={styles.photo}>
            <LogoUpload />
          </View>
        </TouchableOpacity>
        <Gap height={20} />
        <TextInput
          placeholder="Input your kost name"
          value={kostName}
          onChangeText={value => setKostName(value)}
        />
        <Gap height={20} />
        <TextInput
          placeholder="Input your kost address"
          value={address}
          onChangeText={value => setAddress(value)}
        />
        <Gap height={20} />
        <TextInput
          placeholder="Input your kost price"
          value={kostPrice}
          onChangeText={value => setKostPrice(value)}
        />
        <Gap height={20} />
        <Text style={styles.textBiasa}>Choose your type kost</Text>
        <Gap height={5} />
        <View>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            buttonColor={'white'}
            labelColor={'white'}
            formHorizontal={true}
            onPress={tipe => {
              setTipe({value: tipe});
            }}
          />
        </View>
        <Gap height={20} />
        <Button title="Submit" onPress={onSubmit} />
      </Card>
    </View>
  );
};

export default AddKost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',
  },
  topBack: {
    backgroundColor: '#272629',
    height: 445,
    borderRadius: 25,
  },
  circle: {
    height: 76,
    width: 76,
    marginTop: 76,
    backgroundColor: 'white',
    borderRadius: 76,
    alignSelf: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    marginRight: 5,
  },
  textAreaWrapper: {
    flex: 1,
    marginHorizontal: 22,
  },
  textTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#3C3C3C',
    height: 440,
    width: 333,
    top: 270,
    position: 'absolute',
  },
  textSignIn: {
    marginTop: 210,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  photo: {
    width: 285,
    height: 66,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textBiasa: {
    color: 'white',
    textAlign: 'center',
  },
});
