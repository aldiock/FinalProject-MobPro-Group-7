import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {
  IconLogo,
  IconMessage,
  IconPassword,
  IconPemilik,
  IconPencari,
} from '../../assets';
import {Button, Card, Gap, TextInput} from '../../components';
import firebase from '../../config/Firebase';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pickedRole, setPickedRole] = useState('');
  const [alereadyPick, setAlreadyPick] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        const uid = res.user.uid;
        firebase
          .database()
          .ref(`users/${uid}`)
          .on('value', response => {
            try {
              const role = response.val().role;
              if (role === 1) {
                navigation.navigate('HomeScreenMitra');
              }
              if (role === 0) {
                navigation.navigate('HomeScreen');
              }
            } catch (error) {
              showMessage({
                message: 'User not found role is missing',
                type: 'default',
                backgroundColor: '#D9435E',
                color: 'white',
              });
            }
          });
      })
      .catch(error =>
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: '#D9435E',
          color: 'white',
        }),
      );
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
            <Text style={styles.textTitle}>Sign In</Text>
            <Text style={styles.textDescription}>
              Sign in now there are so many new boarding house waiting for you!
            </Text>
          </View>
        </View>
      </View>

      {alereadyPick ? (
        <Card style={styles.card}>
          <Gap height={24} />
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
          <Button title="Sign In" onPress={onSubmit} style={{width: 120}} />
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
            Anda akan masuk sebagai
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
                dispatch({type: 'SET_ROLE', inputValue: 1});
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
                dispatch({type: 'SET_ROLE', inputValue: 0});
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
        <Text style={styles.text}>Don't have an account? </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{
              ...styles.text,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
            }}
            onPress={() => {
              navigation.navigate('SignUp');
              setAlreadyPick(false);
            }}>
            Create Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

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
    height: 246,
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
