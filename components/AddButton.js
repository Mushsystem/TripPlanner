import { View, Text, Button } from 'react-native'
import React from 'react'

export default function AddButton({content, action}) {
  return (
    <View>
      <Button title= {content}  onPress = {action} color = 'dodgerblue'> </Button>
    </View>
  )
}