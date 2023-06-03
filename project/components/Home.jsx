import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import TripModal from './TripModal';
import { styles } from './styles';
import { getTrips } from '../Fire';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrips((trips) => {
      setTrips(trips);
      setLoading(false);
    });
  }, []);

  // Render the component
  return (
    <View style={styles.containerHome}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.centerAlign}>
          <Text style={styles.title}>Mes Voyages</Text>
        </View>
        <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.addButton}>
          <Text style={styles.addButtonLabel}>+</Text>
          <TripModal
            isModalVisible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
          />
        </TouchableOpacity>
      </View>

      {/* Trip list */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.tripList}>
          {trips.map((trip) => {
            // Convert the trip date strings to Date objects
            const dateDepart = new Date(trip.dateDepart);
            const dateArrivee = new Date(trip.dateArrivee);

            // Calculate the difference in milliseconds
            const differenceInMs = dateArrivee - dateDepart;

            // Convert milliseconds to days
            const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

            return (
              <View key={trip.id} style={styles.tripItem}>
                <Text style={styles.tripName}>{trip.name}</Text>
                <Text style={styles.tripDetails}>
                  Ville: {trip.ville} | Durée: {differenceInDays} jours
                </Text>
                <Text></Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;