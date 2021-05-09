import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SignUp, SignIn, HomeScreen, SplashScreen,Profile} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="SplashScreen"
      component={SplashScreen} 
      options={{headerShown:false}}
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
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
