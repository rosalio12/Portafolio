import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; 
const third_image="https://www.fisheries.noaa.gov/s3//2022-10/640x427-Marlin-Pacific-Blue-NOAAFisheries_0.png?itok=97NWHOYb"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Source: local image!</Text>
      <Image style={styles.image} source={require('../practica2/marlin.png')}/> 

      <Text style={styles.Title}>Source: third image!</Text>
      <Image style={styles.image} source={{uri: third_image}}/> 
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
  Title: {
    fontSize:24, 
    fontWeight:'bold',
    marginBottom:1,
  },
  image: {
    width:250, 
    height:250,
    borderRadius:'50%',
    marginBottom:20
  },
});