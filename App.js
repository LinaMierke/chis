import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello Lina!</Text>
      <Image source={{
        width: 200,
        height: 200,
        uri: 'https://picsum.photos/200/300'
      }}></Image>
      <StatusBar style="auto" />
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
