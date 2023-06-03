import React from 'react';
import { Button, View } from 'react-native';
import { styles } from './styles';

const AddButton = props => {
    return (
        <View style={styles.button}>
            <Button
                title={props.content}
                onPress={props.onPress}
            />
        </View>

    );
};