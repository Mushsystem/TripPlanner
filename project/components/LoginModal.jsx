import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import LoginForm from './LoginForm';
import SignUpModal from './SignUpModal';
import Home from './Home';
import { styles } from './styles';

const LoginModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Nouvelle variable d'état pour la connexion réussie

  const handleMailChange = (newMail) => {
    setEmail(newMail);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const onPressLogin = () => {
    // Validation des champs
    if (email === '' || password === '') {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    if (email === 'Admin' && password === 'Password') {
      alert('Identifiants Corrects');
      setIsLoggedIn(true); // Marquer la connexion comme réussie
      return;
    } else {
      alert('Veuillez remplir correctement vos identifiants.');
      return;
    }

    // Réinitialiser les valeurs des champs
    //setEmail('');
    //setPassword('');
  };

  // Vérifier si l'utilisateur est connecté et rediriger vers Home
  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <View visible={props.isModalVisible} animationType="slide">
      <View style={styles.containerModal}>
        <Text style={styles.title}>Connexion </Text>
        <LoginForm
          email={email}
          password={password}
          handleMailChange={handleMailChange}
          handlePasswordChange={handlePasswordChange}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPressLogin} style={styles.addButton}>
            <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Text style={styles.signUpBtn}>Créer un nouveau compte</Text>
            <SignUpModal
              isModalVisible={isModalVisible}
              onClose={() => setIsModalVisible(false)}
            />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default LoginModal;