import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import GetStart from './GetStart';
import SignUp from './SignUp';

const RootStack = createStackNavigator();
const RootStackNaviagtion = () => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="GetStart" component={GetStart}/>
        <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
        <RootStack.Screen name="SignUp" component={SignUp}/>
    </RootStack.Navigator>
);

export default RootStackNaviagtion