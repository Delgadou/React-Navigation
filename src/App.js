import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import Screen0 from './views/Screen0'
import Screen1 from './views/Screen1'
import Screen2 from './views/Screen2'

export default props=> {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Screen0/>
      <Screen1/>
      <Screen2/>
    </SafeAreaView>
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
