import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const TripForm = (props) => {
  const currentDate = new Date();
  const [selectedDateA, setSelectedDateA] = useState(currentDate);
  const [selectedDateD, setSelectedDateD] = useState(currentDate);

  const [isDateAPickerVisible, setIsDateAPickerVisible] = useState(false)
  const [isDateDPickerVisible, setIsDateDPickerVisible] = useState(false)

  return (
    <View style={styles.formContainer}>
      <Text style={styles.inputLabel}>Nom du voyage :</Text>
      <TextInput
        style={styles.input}
        placeholder='Entrez le nom du voyage'
        value={props.nameV}
        onChangeText={props.handleNameVChange}
        multiline={true}

      />
      <Text style={styles.inputLabel}>Ville :</Text>
      <TextInput
        style={styles.input}
        placeholder='Entrez la ville de destination'
        value={props.ville}
        onChangeText={props.handleVilleChange}
        multiline={false}
      />
      <Text style={styles.inputLabel}>Date d'arriver :</Text>
      <Button
        title={selectedDateA.toLocaleDateString('fr-FR')}
        onPress={() => setIsDateAPickerVisible(true)}
      />
      {isDateAPickerVisible && (
        <DateTimePicker
          value={selectedDateA}
          mode='date'
          onChange={(event, date) => {
            setIsDateAPickerVisible(false)
            setSelectedDateA(date)
            props.handleDateAChange(date)
          }}
        />
      )}

      <Text style={styles.inputLabel}>Date de départ :</Text>
      <Button
        title={selectedDateD.toLocaleDateString('fr-FR')}
        onPress={() => setIsDateDPickerVisible(true)}
      />
      {isDateDPickerVisible && (
        <DateTimePicker
          value={selectedDateD}
          mode='date'
          onChange={(event, date) => {
            setIsDateDPickerVisible(false)
            setSelectedDateD(date)
            props.handleDateDChange(date)
          }}
        />
      )}

      <Text style={styles.inputLabel}>Théme de Voyage :</Text>
      <TextInput
        style={styles.input}
        placeholder='Entrez le théme de votre voyage'
        value={props.theme}
        onChangeText={props.handleThemeChange}
        multiline={false}
      />
    </View>
  )
}

export default TripForm

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#fff',
    padding: 50,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 100,
},
})
