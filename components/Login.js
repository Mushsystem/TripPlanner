import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import AddButton from './AddButton';

export default function login(props) {
    return (
        <View style={styles.container}>
            <Text>Votre film :</Text>
            <TextInput placeholder='adresse Email' style={styles.input} value = {props.title} onChangeText={(text) => props.setTitle(text)}></TextInput>
            <TextInput placeholder='mot de passe' style={[styles.input, styles.textarea]} value = {props.synopsis} onChangeText={props.setSynopsis} multiline></TextInput>
            <AddButton content='Quitter' action={props.onClose} />
            <AddButton content='Se connecter' action={onSubmit} />
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
