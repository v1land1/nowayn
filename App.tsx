import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from './src/components/screens/home';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}
