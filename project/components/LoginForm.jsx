import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

const LoginForm = (props) => {
  return (
    <View style={styles.containerForm}>
      <Text style={styles.inputLabel}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder='Saisissez votre e-mail'
        value={props.email}
        onChangeText={props.handleMailChange}
        multiline={false}
      />
      <Text style={styles.inputLabel}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder='Saisissez votre mot de passe'
        value={props.password}
        onChangeText={props.handlePasswordChange}
        multiline={false}
      />
    </View>
  );
};

export default LoginForm;