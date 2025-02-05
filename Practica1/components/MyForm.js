import React,{useState} from "react";
import { StyleSheet,Text,Button,View,TextInput,StatusBar } from "react-native";

export default function MyForm(){

     const [text, setText] = useState('');
      const [displayText, setDisplayText] = useState('');
     
      const handlePress = () => {
        setDisplayText(text);
        setText('');
     };
return (
 <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder='Type Something'
        value={text}
        onChangeText={setText}
      />
      <Button title="Click me!" onPress={handlePress} />
      <Text style={styles.resultText}>Text to show: {displayText}</Text >
      <StatusBar style="auto" />
    </View>
        );
     
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      alignItems: 'center',
      justifyContent: 'center',
      padding:16,
    },
    input:{
      width:'80%' ,
  height:40,
  BorderWidth:1,
  borderColor:'gray',
  marginBottom:16,
  paddingLeft:8,
  
    },
    resultText:{
  marginTop:16,
  fontSize:16,
    },
    titulo: {
      fontSize: 80,
    },
    });