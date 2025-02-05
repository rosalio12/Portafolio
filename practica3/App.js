import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';

export default function App() {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <Appbar>
      <Appbar.Content title="React native paper"/>

      </Appbar>
      <TextInput style={styles.input} 
      lable='Type'
      value={text}
      textColor="blue"
      onChangeText={text=>setText(text)}/>
      <Button mode ='contained' onPress={() => alert(`Text: ${text}`)}>
        Type Something
      </Button>
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
  input:{
    marginBottom: 10,

  }
});