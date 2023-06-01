import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import TripForm from './TripForm';
import MyButton from './MyButton';
import { addTrip } from '../Fire';

const TripModal = (props) => {
  const [name, setName] = useState('');
  const [ville, setVille] = useState('');
  const [dateArriver, setDateArriver] = useState('');
  const [dateDepart, setDateDepart] = useState('');
  const [theme, setTheme] = useState('');

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleVilleChange = (newVille) => {
    setVille(newVille);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleDateAChange = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setDateArriver(formattedDate);
  };

  const handleDateDChange = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setDateDepart(formattedDate);
  };

  const onSubmit = () => {
    let trip = {
      name: name,
      ville: ville,
      dateArriver: dateArriver,
      dateDepart: dateDepart,
      theme: theme,
    };
    console.log('Name : ', name);
    console.log('Ville : ', ville);
    console.log("Date d'arriver : ", dateArriver);
    console.log("Date de départ : ", dateDepart);
    console.log("theme : ", theme);

    if (props.trip) {
        // Si on recoit un voyage dans le composant, on le modifie ("CURD : Update")
        trip.id = props.trip.id;
        trip.name = props.trip.name;
        trip.ville = props.trip.ville;
        trip.dateArriver = props.trip.dateArriver;
        trip.dateDepart = props.trip.dateDepart;
        trip.theme = props.trip.theme;  
      // Update other properties if needed
    } else {
      // sinon, on le creer ("CURD : Creat")
      addTrip(trip);
    }

    props.onClose();
    setName('');
    setVille('');
    setDateArriver('');
    setDateDepart('');
    setTheme('');
  };

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <TripForm
          name={name}
          ville={ville}
          datearriver={dateArriver}
          datedepart={dateDepart}
          theme={theme}
          handleNameChange={handleNameChange}
          handleVilleChange={handleVilleChange}
          handleDateAChange={handleDateAChange}
          handleDateDChange={handleDateDChange}
          handleThemeChange={handleThemeChange}
        />
        <View style={styles.buttonContainer}>
          <MyButton content="Valider" onPress={onSubmit} />
          <MyButton content="Close" onPress={props.onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default TripModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(242,255,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20,
  },
});
