import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {
  HomeScreen,
  HomeScreenMitra,
  Profile,
  SignIn,
  SignUp,
  SplashScreen,
  AddKost,
} from '../pages';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const globalState = useSelector(state => state);
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
          borderRadius: 15,
          height: 85,
          bottom: -15,
        },
      }}>
      {globalState.role === 1 ? (
        <Tab.Screen
          name="HomeScreenMitra"
          component={HomeScreenMitra}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Image source={require('../assets/icon/home.png')} />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Image source={require('../assets/icon/home.png')} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/icon/profile.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Router = () => {
  const globalState = useSelector(state => state);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="AddKost"
        component={AddKost}
        options={{headerShown: false}}
      />
      {globalState.role === 1 ? (
        <Stack.Screen
          name="HomeScreenMitra"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="HomeScreen"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default Router;
