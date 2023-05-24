import React from 'react';
import { Button, View, StyleSheet, ViewBase } from 'react-native';

const AddButton = props => {
    return (
        <View style={styles.button}>
            <Button
                title={props.content}
                onPress={props.onPress}
            // onClose={props.onClose} 
            />
        </View>

    );
};

export default AddButton;
const styles = StyleSheet.create({
    button: {
        color: "black",
        borderRadius: 5,
        marginVertical: 5,
    },

});