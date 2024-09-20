import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {laundryCompanies} from '../constants/LaundryData'

const LaundryRow = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {laundryCompanies.map((company, index) => (
     <TouchableOpacity key={index} style={styles.rowContainer}>
     <View style={styles.rowContent}>
       <Text style={styles.companyName}>{company.name}</Text>
       <Text style={styles.companyAddress}>{company.address}</Text>
       <View style={styles.ratingContainer}>
         <Ionicons name="star" size={16} color="#FFD700" />
         <Text style={styles.ratingText}>{company.rating}</Text>
       </View>
     </View>
   </TouchableOpacity>
 ))}
</ScrollView>
</View>
);
};

export default LaundryRow;

const styles = StyleSheet.create({
container: {
marginBottom: 20
},
rowContainer: {
backgroundColor: '#fff',
padding: 15,
borderRadius: 10,
marginRight: 10,
borderWidth: 1,
borderColor: '#ddd',
width: 250, // Set a fixed width for the rows
},
rowContent: {
justifyContent: 'space-between',
alignItems: 'flex-start',
},
companyName: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
color: '#000',
},
companyAddress: {
fontSize: 14,
color: '#666',
marginBottom: 10,
},
ratingContainer: {
flexDirection: 'row',
alignItems: 'center',
},
ratingText: {
fontSize: 14,
marginLeft: 5,
color: '#333',
},
});
