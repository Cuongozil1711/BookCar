// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/authorize/HomeScreen';
import DetailsScreen from './screen/authorize/DetailsScreen';
import { ActivityIndicator, Button, View, Text } from 'react-native';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-community/async-storage';
import RootStackNaviagtion from './screen/unAuthorize/RootStackScreen';
import Logout from './screen/authorize/Logout';
import Welcome from './screen/authorize/Welcome';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebase";
import Chat from './screen/authorize/Chat';

const baseHeaderConfigV2 = (key, options) => ({
  headerLeft: false,
  headerStyle: { backgroundColor: 'white' },
  headerTitle: (
    <Welcome />
  ),
});

const App = () => {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const Stack = createStackNavigator();

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser.userToken);
      const userName = foundUser.username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: async (foundUser) => {
      console.log("foundUser: " + JSON.stringify(foundUser));
      const userToken = String(foundUser.userToken);
      const userName = foundUser.username;
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'REGISTER', id: userName, token: userToken });
    },
  }), []);


  React.useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);


  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ?
          (
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} options={{
                headerRight:
                  props => <Logout {...props} />,
                ...baseHeaderConfigV2(),
              }} />
              <Stack.Screen name="Details" component={DetailsScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen name="Chat" component={Chat}
                options={{
                  headerShown: true,
                }}
              />
            </Stack.Navigator>
          )
          :
          (<RootStackNaviagtion />)
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;