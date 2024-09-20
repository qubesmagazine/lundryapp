import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for the back arrow and other icons
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';

const Now = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  // Handle the date change
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false); // Close the picker after selection
    setDate(currentDate);
  };

  // Function to show date picker
  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      {/* Go Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>

      {/* Reserve Laundry Time Section */}
      <View style={styles.centeredContent}>
        <Text style={styles.title}>Reserve a laundry time</Text>
        <Text style={styles.timeText}>{date.toLocaleTimeString()}</Text>
        <Text style={styles.dateText}>{date.toDateString()}</Text>
      </View>

      {/* Box Icon and Time Picker */}
      <TouchableOpacity style={styles.timePicker} onPress={showDatepicker}>
        <Ionicons name="time-outline" size={32} color="#000" />
        <Text style={styles.pickupText}>Choose your exact time for pickup</Text>
      </TouchableOpacity>

      {/* Display DateTimePicker if 'show' is true */}
      {show && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={onChange}
        />
      )}

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => router.push('commerciallaundry')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Now;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 18,
    color: '#666',
  },
  timePicker: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
  },
  pickupText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 50,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
