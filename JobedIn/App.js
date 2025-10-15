// App.js - nastavi normalno
import React from 'react';
import {View, Text} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <LoginScreen/>
    // <RegisterScreen/>
    // <HomeScreen/>
  );
}

export default App;