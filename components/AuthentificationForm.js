import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'
import AddButton from './AddButton';


function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Vérification des champs
    if (username === "" || password === "") {
      alert("Veuillez remplir tous les champs.");
      return false;
    }
  
    // Autres vérifications (par exemple, longueur minimale du mot de passe, caractères spéciaux requis, etc.)
  
    return true; // Le formulaire est valide
  }
  

export default function AuthentificationForm(props) {
    return (
        <View style={styles.container}>
            <Text>Votre film :</Text>
            <TextInput placeholder='Entrez votre addresse Email' style={styles.input} value = {props.title} onChangeText={(text) => props.setTitle(text)}></TextInput>
            <TextInput placeholder='Entrez votre mot de passe' style={[styles.input, styles.textarea]} value = {props.synopsis} onChangeText={props.setSynopsis} multiline></TextInput>
            <TextInput placeholder='Confirmez votre mot de passe' style={[styles.input, styles.textarea]} value = {props.synopsis} onChangeText={props.setSynopsis} multiline></TextInput>
            <AddButton content='Creer' action={onSubmit} />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'dodgerblue',
        width: '90%',
        height: 40,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textarea: {
        height: 120,
    }
});
