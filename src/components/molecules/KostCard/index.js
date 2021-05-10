import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconFemale, IconMale} from '../../../assets';
import Gap from '../../atoms/Gap';
import Card from '../Card';

const KostCard = ({imageKost, namaKost, alamat, kostPrice, tipeKost}) => {
  return (
    <View>
      <Card>
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
          <View style={{marginLeft: 10}}>
            <View style={styles.containerGambarKost}>
              <Image style={styles.gambarKost} source={imageKost} />
              <Image style={styles.gambarKost} />
            </View>
          </View>
          <View style={{marginRight: 29}}>
            <Gap height={8} />
            <Text style={styles.namaKost}>{namaKost}</Text>
            <Gap height={17} />
            {/* <View style={{alignItems: 'center'}}>
              <IconMale />
            </View> */}
            {tipeKost === 1 ? (
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
            <Text style={styles.alamatKost}>{alamat}</Text>
            <Gap height={6} />
            <Text style={styles.hargaKost}>
              <Text style={styles.month}>
                Rp. {kostPrice} {''}
                <Text style={{fontWeight: '100'}}>/month</Text>
              </Text>
            </Text>
          </View>
        </TouchableOpacity>
        {/* <Button
          title="Details"
          style={{width: 90, marginTop: 5, marginBottom: 5}}
          {...props}
        /> */}
      </Card>
    </View>
  );
};

export default KostCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  namaKost: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gender: {
    fontSize: 11,
    textAlign: 'center',
  },
  alamatKost: {
    fontSize: 13,
    textAlign: 'center',
  },
  hargaKost: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  month: {
    fontWeight: '700',
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
