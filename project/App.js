import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TripModal from './components/TripModal';
import * as Fire from './Fire';

export default function App() { // ("CURD : READ")
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Fire.getTrips(trips => {
      setTrips(trips);
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.centerAlign}>
          <Text style={styles.h1}>Mes Voyages</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.addButtonLabel}>+</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.tripList}>
        {trips.map((trip) => (
        <View key={trip.id} style={styles.tripItem}>
          <Text style={styles.tripName}>{trip.name}</Text>
          <Text style={styles.tripDetails}>
            Ville : {trip.ville} | Duree : {trip.dateDepart} {/* Calculer la difference entre l'arriver et le depart */}
          </Text>
          <Text></Text> 
        </View>
        ))}
      </View>

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
    backgroundColor: 'rgb(242, 255, 255)',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  centerAlign: {
    flex: 1,
    alignItems: 'center',
  },
  h1: {
    fontSize: 34,
    color: '#073064',
    fontWeight: '800',
    marginRight: 40,
  },
  addButton: {
    backgroundColor: '#14BFB3',
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});