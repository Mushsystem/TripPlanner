import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddButton from './components/AddButton';
import MovieModal from './components/MovieModal';
import AuthentificationForm from './components/AuthentificationForm';
import PageChanger from './components/ChangePage';

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)
  console.log(isModalVisible);

  return (
    <View style={styles.container}>
      <Text style={styles.textStart}>Bienvenue 
        <Text style={styles.textEnd}> 
        </Text>
      </Text>
      <AddButton content='Creer ton compte' onPress={PageChanger} />
      <StatusBar style="hidden" />
      <MovieModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
      <AddButton content='Connection' onPress={PageChanger} />
     <StatusBar style="hidden" />
    <MovieModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
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
  textStart: {
    fontSize: 22,
  },
  textEnd: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'dodgerblue'
  }
});
