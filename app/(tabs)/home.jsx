import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // for icons
import delivery1 from '../../assets/images/delivery1.png';
import delivery2 from '../../assets/images/delivery2.png';
import delivery3 from '../../assets/images/delivery3.png';
import LaundryRow from '../../components/LaundryRow';
import { router } from 'expo-router';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with App Name */}
      <Text style={styles.appName}>Lundry</Text>

      {/* Search Input with Icon and Button */}
      <View style={styles.searchRow}>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={24} color="#333" />
          <TextInput
            style={styles.searchInput}
            placeholder="Laundry search area"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.scheduleButton} onPress={() => router.push('now')}>
            <Text style={styles.scheduleText}>Now</Text>
            <Ionicons name="caret-down-outline" size={16} color="#333" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.goButton} onPress={() => router.push('commerciallaundry')}>
          <Text style={styles.goButtonText}>Go</Text>
        </TouchableOpacity>
      </View>

      {/* Advertisement Images with Horizontal Scroll */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.adRow}>
        <Image source={delivery1} style={styles.adImage} />
        <Image source={delivery2} style={styles.adImage} />
        <Image source={delivery3} style={styles.adImage} />
      </ScrollView>

      {/* Action Buttons Row */}
      <View style={styles.actionButtonsRow}>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('trackorder')}>
          <Text style={styles.actionButtonText}>Track your order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('pricerates')}>
          <Text style={styles.actionButtonText}>Price Rates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('commerciallaundry')}>
          <Text style={styles.actionButtonText}>Commercial Laundry</Text>
        </TouchableOpacity>
      </View>
      <LaundryRow />
   
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5', // Light grey background
    padding: 20,
    marginTop: 40,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000', // Black text
    marginBottom: 20,
    textAlign: 'left', // Align to the left corner
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // White background for the search container
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1, // Allow it to take available space
  },
  searchInput: {
    flex: 1,
    color: '#333',
    paddingLeft: 10,
    fontSize: 16,
  },
  scheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#ddd', // Light grey border
  },
  scheduleText: {
    color: '#333',
    marginRight: 5,
  },
  goButton: {
    backgroundColor: '#000', // Black background for the Go button
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
  },
  goButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  adRow: {
    marginBottom:10,
    flexDirection: 'row',
  },
  adImage: {
    width: 200, // Adjust width for horizontal scroll
    height: 120, // Adjust height of the images
    marginRight: 10, // Add some spacing between images
    borderRadius: 10,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 80,
  },
  actionButton: {
    backgroundColor: 'black', // Grey background like Uber
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 50,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

});
