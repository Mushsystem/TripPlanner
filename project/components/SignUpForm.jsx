import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

const SignUpForm = (props) => {
  return (
      <View style={styles.containerForm}>
        <Text style={styles.inputLabel}>Mail:</Text>
        <TextInput
          style={styles.input}
          placeholder='Entrer votre e-mail'
          value={props.mail}
          onChangeText={props.handleMailChange}
          multiline={false}
        />
        <Text style={styles.inputLabel}>Mot de passe :</Text>
        <TextInput
          style={styles.input}
          placeholder='Entrer votre mot de passe'
          value={props.password}
          onChangeText={props.handlePasswordChange}
          multiline={false}
        />
        <Text style={styles.inputLabel}>Confirmer Mot de passe:</Text>
        <TextInput
          style={styles.input}
          placeholder='Confirmer votre mot de passe'
          value={props.confirmPassword}
          onChangeText={props.handleConfirmPasswordChange}
          multiline={false}
        />
      </View>
  );
};

export default SignUpForm;