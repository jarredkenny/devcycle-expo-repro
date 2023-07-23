import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import 'react-native-get-random-values'
import DeviceInfo from 'react-native-device-info'
import '@react-native-async-storage/async-storage'
import { withDVCProvider } from '@devcycle/react-native-client-sdk'

global.DeviceInfo = DeviceInfo

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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

export default withDVCProvider('XXXXXXXXX', App)