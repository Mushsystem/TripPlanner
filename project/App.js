import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  MyButton from './components/MyButton';
import TripModal from './components/TripModal';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style = {styles.h1}>Bienvenue sur <Text style = {{ color: 'rgb(27, 121, 255)', fontWeight : 800 }}> My Movies ! </Text> </Text>
       <MyButton
        content="Ajouter un film"
        onPress={() => setIsModalVisible(true)}
      />
      <TripModal 
       isModalVisible={isModalVisible}
       onClose={() => setIsModalVisible(false)}
      />
      <StatusBar style="auto" />
    </View>
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abcd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1:{
     fontSize : 34,
     alignItems : "center",
  }

});
