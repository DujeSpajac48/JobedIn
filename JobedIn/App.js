import React from 'react';
import {View, Text} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Navigation/AuthNavigator';

// Enable react-native-screens MUST FOR IOS!!!!!!!!!!!!!!!!!!!!!!!!
import { enableScreens } from 'react-native-screens';
enableScreens();

function App() {
  return (
    // <LoginScreen/>
    < NavigationContainer>
      <AuthNavigator/>

    </NavigationContainer>
    // <RegisterScreen/>
    // <HomeScreen/>
  );
}

export default App;