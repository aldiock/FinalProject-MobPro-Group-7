import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationBottom from './NavigationBottom';

const Profile = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container1}>
        <View style={styles.container}>
          {/* <View style={styles.ProfPict}>
                    <Text>Profile Picture</Text>
                    </View> */}
          <Text style={styles.textProfile}>Dummy data name</Text>
          <Text style={styles.textEmail}>dummy@gmail.com</Text>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.textKost}>Kost Mizpa</Text>
        <Text style={styles.textPayment}>Total Payment</Text>
        <Text style={styles.payment}>450.000</Text>
      </View>
      {/* <Gap height={201} /> */}
      {/* <SignOut /> */}
      {/* <Gap height={55} /> */}
      <NavigationBottom />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#555555',
  },
  container1: {
    height: 100,
    backgroundColor: '#272629',
  },
  container: {
    paddingTop: 65,
    paddingLeft: 146.01,
    height: 150,
    backgroundColor: '#272629',
    borderRadius: 40,
  },
  textProfile: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  textEmail: {
    fontSize: 14,
    color: 'white',
  },
  centerContainer: {
    alignSelf: 'center',
    backgroundColor: '#272629',
    height: 129,
    width: 311,
    alignItems: 'center',
    marginVertical: 225,
    borderRadius: 5,
  },
  textKost: {
    marginVertical: 20,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  textPayment: {
    fontSize: 9,
    color: 'white',
  },
  payment: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomNavigate: {
    backgroundColor: 'white',
    paddingTop: 725,
    height: 87,
    borderRadius: 5,
  },
});
