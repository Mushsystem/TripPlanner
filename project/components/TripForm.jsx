import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker'
import SelectDropdown from 'react-native-select-dropdown'

const TripPForm = (props) => {

  const currentDate = new Date();
  const [selectedDateA, setSelectedDateA] = useState(currentDate);
  const [selectedDateD, setSelectedDateD] = useState(currentDate);

  const [isDateAPickerVisible, setIsDateAPickerVisible] = useState(false)
  const [isDateDPickerVisible, setIsDateDPickerVisible] = useState(false)

  

  const countries = ["France","Egypt", "Grèce", "Espagne"]
  const themes = ["Culture","Sport", "Nature", "Gastronomique","Relegion"]

  const handleVilleSelection = (selectedItem, index) => {
    console.log(selectedItem);
    props.handleVilleChange(selectedItem);
  };

  const handleThemeSelection = (selectedItem, index) => {
    console.log(selectedItem);
    props.handleThemeChange(selectedItem);
  };

  return (
    <View style={styles.content}>
      <View style={styles.containerForm}>
        <Text style={styles.inputLabel}>Nom du voyage :</Text>
        <TextInput
          style={styles.input}
          placeholder='Entrer nom du voyage'
          value={props.name}
          onChangeText={props.handleNameChange}
          multiline={false}
        />
        <Text style={styles.inputLabel}>Ville :</Text>
        <SelectDropdown
          data={countries}
          onSelect={handleVilleSelection}
          buttonTextAfterSelection={(selectedItem, index) => {return selectedItem;}}
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
        <SelectDropdown
          data={themes}
          onSelect={handleThemeSelection}
          buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
        />
      </View>
    </View>
  );
};

export default TripPForm;