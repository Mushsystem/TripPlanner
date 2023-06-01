import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PageChanger() {
  const changePage = () => {
    // Implement the logic to change the page or perform any other action
    console.log('Button clicked');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to My App!</Text>
      <Button title="Change Page" onPress={changePage} />
    </View>
  );
}