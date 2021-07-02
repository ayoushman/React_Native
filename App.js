import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';


import MealsNavigation from './navigation/MealsNavigation';


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/fonts/OpenSans-Regular.ttf'),
    'open-sans-Bold': require('./assets/fonts/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {


  const [Font, setFont] = useState(false);

  if (!Font) {
    return (
      // <AppLoading startAsync={fetchFonts} onFinish={() => setFont(true)} />
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFont(true)}
        onError={console.warn}

      />

    );

  }



  return (

    <MealsNavigation />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
