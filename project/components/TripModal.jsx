import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import TripForm from './TripForm'
import MyButton from './MyButton'

const TripModal = (props) => {
    const [nameV, setNameV] = useState('');
    const [ville, setVille] = useState('');
    const [dateArriver, setDateArriver] = useState('');
    const [dateDepart, setDateDepart] = useState('');
    const [theme, setTheme] = useState('');

    const handleNameVChange = (newNameV) => {
        setNameV(newNameV);
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


    function onSubmit() {
        console.log('Name : ', nameV);
        console.log('Ville : ', ville);
        console.log("Date d'arriver : ", dateArriver);
        console.log("Date de départ : ", dateDepart);
        console.log("theme : ",theme);
        props.onClose();
        setNameV('');
        setVille('');
        setDateArriver('');
        setDateDepart('');
        setTheme('')
    }
  return (
    <Modal
      visible={props.isModalVisible}
      animationType="slide"
    >
        <View style={styles.container}>
            <Text style={styles.h1}>{'\n'}</Text>
            <TripForm
                nameV={nameV}
                ville={ville}
                datearriver={dateArriver}
                datedepart={dateDepart}
                theme={theme}

                handleNameVChange={handleNameVChange}
                handleVilleChange={handleVilleChange}
                handleDateAChange={handleDateAChange}
                handleDateDChange={handleDateDChange}
                handleThemeChange={handleThemeChange}
            />
            <View style ={styles.buttonContainer}>
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
        backgroundColor: '#abcd',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 100,
    },
});