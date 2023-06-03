import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import SignUpForm from './SignUpForm';
import { styles } from './styles';

const SignUpModal = (props) => {
  //const [isModalVisible, setIsModalVisible] = useState(false);

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleMailChange = (newMail) => {
    setMail(newMail);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (newConfirmPassword) => {
    setConfirmPassword(newConfirmPassword);
  };

  const onPress = () => {
    // Validation des champs
    if (mail === '' || password === '' || confirmPassword === '') {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Vérification que les mots de passe correspondent
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
      

    // Envoyer les données au serveur 
    console.log('mail:', mail);
    console.log('Password:', password);
    alert('Votre compte est crée ');

    props.onClose();
    // Réinitialiser les valeurs des champs
    setMail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Modal visible={props.isModalVisible} animationType="slide">
      <View style={styles.containerModal}>
        <Text style={styles.title}>Creer votre compte </Text>
        <SignUpForm
          mail={mail}
          password={password}
          confirmPassword={confirmPassword}

          handleMailChange={handleMailChange}
          handlePasswordChange={handlePasswordChange}
          handleConfirmPasswordChange ={handleConfirmPasswordChange}

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

export default SignUpModal;