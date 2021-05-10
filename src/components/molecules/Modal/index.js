import React from 'react';
import {
  Image,
  Modal as ModalRN,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconMale} from '../../../assets';
import {Button, Gap} from '../../atoms';
import Card from '../Card';

const Modal = ({...props}) => {
  const modal = true;
  return (
    <ModalRN transparent={true} {...props} animationType="fade">
      <View style={{flex: 1, backgroundColor: '#000000aa'}}>
        <TouchableOpacity
          style={{flex: 1}}
          activeOpacity={0.9}
          onPress={() => {}}>
          <Card
            style={{
              height: 210,
              width: 350,
              alignSelf: 'center',
              marginTop: 250,
              padding: 5,
            }}>
            <View style={styles.container}>
              <View style={{marginLeft: 10}}>
                <View style={styles.containerGambarKost}>
                  <Image
                    style={styles.gambarKost}
                    source={require('../../../assets/KostImage/kost.png')}
                  />
                </View>
              </View>
              <View style={{marginRight: 29}}>
                <Gap height={8} />
                <Text style={styles.namaKost}></Text>
                <Gap height={17} />
                <View style={{alignItems: 'center'}}>
                  <IconMale />
                </View>
                <Text style={styles.gender}>Wanita</Text>
                <Gap height={20} />
                <Text style={styles.alamatKost}>
                  Jalan Kanaan, Airmadidi Bawah
                </Text>
                <Gap height={6} />
                <Text style={styles.hargaKost}>
                  Rp.750.000
                  <Text style={styles.month}> /month</Text>
                </Text>
              </View>
            </View>
            <Button title="Book Now" style={{width: 340, marginTop: 10}} />
          </Card>
        </TouchableOpacity>
      </View>
    </ModalRN>
  );
};

export default Modal;

const styles = StyleSheet.create({
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
