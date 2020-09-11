import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ImageSelect } from './ImageSelect';
import * as SplashScreen from 'expo-splash-screen';
export function preventAutoHide() {
    if (SplashScreen.preventAutoHide) {
        SplashScreen.preventAutoHide();
    }
}
export function hide() {
    if (SplashScreen.hide) {
        SplashScreen.hide();
    }
}

export default function App() {
  return (
    <ScrollView contentContainerStyle={ styles.container }>
      <ImageSelect />
    </ScrollView>
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
