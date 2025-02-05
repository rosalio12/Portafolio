import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import MyForm from './components/MyForm';


export default function MyApp(){
  
  

  return(
    <View style={styles.container}>
      <MyForm/>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#fff',
  },

}); 