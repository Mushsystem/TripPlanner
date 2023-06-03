import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import LoginModal from './components/LoginModal';
import { styles } from './components/styles';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // Redirect to the login page after 5 seconds
      setIsModalVisible(true);
    }, 5000);
  }, []);

  return (
    <View style={styles.containerApp}>
      <View style={styles.navbar}>
        <Image style={styles.logo} source={require('./assets/icon_2.png')} />
      </View>
      <View style={styles.content}>
        {isModalVisible && 
        <LoginModal 
          isModalVisible={isModalVisible} 
        />}
      </View>
    </View>
  );
}