import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import TripForm from './TripForm';
import { addTrip, updateTrip } from '../Fire';
import { styles } from './styles';

const TripModal = (props) => {
  const [name, setName] = useState('');
  const [ville, setVille] = useState('');
  const [dateArriver, setDateArriver] = useState('');
  const [dateDepart, setDateDepart] = useState('');
  const [theme, setTheme] = useState('');

  const handleNameChange = useCallback((newName) => {
    setName(newName);
  }, []);

  const handleVilleChange = useCallback((newVille) => {
    setVille(newVille);
  }, []);

  const handleThemeChange = useCallback((newTheme) => {
    setTheme(newTheme);
  }, []);

  const handleDateAChange = useCallback((date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setDateArriver(formattedDate);
  }, []);

  const handleDateDChange = useCallback((date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setDateDepart(formattedDate);
  }, []);

  const addTripToList = useCallback(() => {
    // Réinitialiser les valeurs des champs
    setName('');
    setVille('');
    setDateArriver('');
    setDateDepart('');
    setTheme('');
  }, [name, ville, dateArriver, dateDepart, theme]);

  const onPress = useCallback(() => {
    let trip = {
      name,
      ville,
      dateArriver,
      dateDepart,
      theme,
    };

    // Envoyer les données au serveur
    console.log('Name: ', name);
    console.log('Ville: ', ville);
    console.log("Date d'arriver: ", dateArriver);
    console.log("Date de départ: ", dateDepart);
    console.log("theme: ", theme);

    if (props.trip) {
      // Si on reçoit un voyage dans le composant, on le modifie ("CRUD: Update")
      trip.id = props.trip.id;
      updateTrip(trip);
    } else {
      // Sinon, on le crée ("CRUD: Create")
      addTrip(trip);
    }



    props.onClose();
  }, [name, ville, dateArriver, dateDepart, theme, props, addTripToList]);

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.containerModal}>
        <Text style={styles.title}>Preparer votre voyage</Text>
        <Text>{'\n'}</Text>
        <TripForm
          name={name}
          ville={ville}
          dateArriver={dateArriver}
          dateDepart={dateDepart}
          theme={theme}
          handleNameChange={handleNameChange}
          handleVilleChange={handleVilleChange}
          handleDateAChange={handleDateAChange}
          handleDateDChange={handleDateDChange}
          handleThemeChange={handleThemeChange}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPress} style={styles.addButton}>
            <Text style={styles.text}>Valider</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </Modal>
  );
};

export default TripModal;