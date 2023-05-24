import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import TripForm from './TripForm'
import MyButton from './MyButton'

const TripModal = (props) => {
    const [nameV, setNameV] = useState('Voyage');
    const [ville, setVille] = useState('Alexandrie');
    const [dateArriver, setDateArriver] = useState('25/05/2023');
    const [dateDepart, setDateDepart] = useState('19/07/2023');
    const [theme, setTheme] = useState('Culture');

    const handleNameVChange = (newNameV) => {
        setNameV(newNameV);
    };
    
    const handleVilleChange = (newVille) => {
        setVille(newVille);
    };

    const handleThemeChange = (newTheme) => {
        setVille(newVille);
    };


    const handleSubmit = () => {
        console.log('Name : ', nameV);
        console.log('Ville : ', ville);
        console.log("Date d'arriver : ", dateArriver)
        console.log("Date de départ : ", dateDepart)
        console.log("theme : ",theme)
        props.onClose();
    };

  return (
    <Modal
      visible={props.isModalVisible}
      animationType="slide"
    >
        <View style={styles.container}>
            <Text style={styles.h1}>{'\n'}Le formulaire devra apparaître ici...</Text>
            <TripForm
                nameV={nameV}
                ville={ville}
                datearriver={dateArriver}
                datedepart={dateDepart}
                theme={theme}

                handleNameChange={handleNameVChange}
                handleVilleChange={handleVilleChange}
                //handleDateAChange={handleDateAChange}
                //handleDateDChange={handleDateDChange}
                handleThemeChange={handleThemeChange}
            />
            <View style ={styles.buttonContainer}>
                <MyButton content="Valider" onPress={handleSubmit} />
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
        backgroundColor: '#abcd',
        alignItems: 'center',
        justifyContent: 'center',
      },
      h1:{
         fontSize : 34,
         alignItems : "center",
      },

});