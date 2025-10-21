import React from 'react';
import {View, Text} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Navigation/AuthNavigator';
import MainTab from './Navigation/MainTab';

// Enable react-native-screens MUST FOR IOS!!!!!!!!!!!!!!!!!!!!!!!!
import { enableScreens } from 'react-native-screens';
enableScreens();

function App() {
  const [isLoggedin,setIsLoggedIn] = useState(false);
  

  return (
    // <LoginScreen/>
    < NavigationContainer>
      {isLoggedin ? <MainTab/>:<AuthNavigator/>}

    </NavigationContainer>
    // <RegisterScreen/>
    // <HomeScreen/>
  );
}

export default App;