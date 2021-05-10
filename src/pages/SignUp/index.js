import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconLogo,
  IconMessage,
  IconPassword,
  IconPemilik,
  IconPencari,
  IconUser,
} from '../../assets';
import {Button, Card, Gap, TextInput} from '../../components';
import {showMessage} from 'react-native-flash-message';
import firebase from '../../config/Firebase';

const SignUp = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pickedRole, setPickedRole] = useState('');
  const [alereadyPick, setAlreadyPick] = useState(false);

  const onSubmit = () => {
    const data = {
      userName: userName,
      email: email,
      role: pickedRole,
      password: password,
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const data = {
          userName: userName,
          email: email,
          role: pickedRole,
        };
        firebase.database().ref(`users/${res.user.uid}`).set(data);
        setUserName('');
        setEmail('');
        setPassword('');
        setPickedRole();
        navigation.navigate('SignIn');
        console.log(data);
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: '#D9435E',
          color: 'white',
        });
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBackContainer}>
        <View style={styles.topBack}>
          <View style={styles.circle}>
            <View style={styles.logo}>
              <IconLogo />
            </View>
          </View>
          <Gap height={24} />
          <View style={styles.textAreaWrapper}>
            <Text style={styles.textTitle}>Sign Up </Text>
            <Text style={styles.textDescription}>
              Save your time, money and energy by just search your boarding
              house in U-KOST
            </Text>
          </View>
        </View>
      </View>
      {alereadyPick ? (
        <Card style={styles.card}>
          <Gap height={24} />
          <TextInput
            placeholder="Username"
            value={userName}
            onChangeText={value => setUserName(value)}>
            <IconUser />
          </TextInput>
          <Gap height={13} />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={value => setEmail(value)}>
            <IconMessage />
          </TextInput>
          <Gap height={13} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry>
            <IconPassword />
          </TextInput>
          <Gap height={41} />
          <Button
            title="Create Account"
            onPress={onSubmit}
            style={{width: 170}}
          />
          <Gap height={22} />
        </Card>
      ) : (
        <Card
          style={{
            ...styles.card,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginBottom: 60,
              color: 'white',
              fontWeight: '600',
              fontSize: 17,
            }}>
            Anda akan mendaftar sebagai
          </Text>
          <View
            style={{
              width: 260,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              activeOpacity={0.7}
              onPress={() => {
                setAlreadyPick(true);
                setPickedRole(1);
              }}>
              <IconPemilik />
              <Gap height={9} />
              <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
                Pemilik Kost
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              activeOpacity={0.7}
              onPress={() => {
                setAlreadyPick(true);
                setPickedRole(0);
              }}>
              <IconPencari />
              <Gap height={2} />
              <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
                Pencari Kost
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
      )}
      <View style={styles.textSignIn}>
        <Text style={styles.text}>Already have account? </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{
              ...styles.text,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
            }}
            onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

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
  topBackContainer: {
    height: 420,
    backgroundColor: '#272629',
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
  textDescription: {
    marginTop: 5,
    color: 'white',
    fontSize: 14,
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#3C3C3C',
    height: 296,
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
});
