import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const RootStack =createStackNavigator();

const RootStackkScreen = ({naviagtion}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='   SplashScreen' component={SplashScreen}/>    
        <RootStack.Screen name='  SignInScreen' component={SplashScreen}/>
        <RootStack.Screen name='   SignUpScreen' component={SplashScreen}/>
    </RootStack.Navigator>
);
export default RootStackkScreen;