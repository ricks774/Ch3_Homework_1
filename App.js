import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// navigation套件
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';


import HomeScreen from './src/screens/HomeScreen';
import ArtScreen from './src/screens/ArtScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: true, cardOverlayEnabled: 'true' }}>
        <Stack.Screen name="HomePage" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ArtPage" component={ArtScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
