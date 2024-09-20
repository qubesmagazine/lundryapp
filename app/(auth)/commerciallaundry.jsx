import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { laundryCompanies } from '../../constants/LaundryData'; // Import your data
import MapView, { Marker } from 'react-native-maps';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const CommercialLaundry = () => {
  const [selectedService, setSelectedService] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Filter by Service (if needed)
  const filterCompanies = selectedService
    ? laundryCompanies.filter(company => company.special_services.includes(selectedService))
    : laundryCompanies;

  const renderCompany = ({ item }) => (
    <View style={styles.companyCard}>
      <Text style={styles.companyName}>{item.name}</Text>
      <Text style={styles.address}>{item.address}</Text>
      <Text style={styles.phone}>Phone: {item.phone}</Text>
      <Text style={styles.rating}>Rating: {item.rating} ★</Text>

      {/* Price List */}
      <View style={styles.prices}>
        <Text>Shirt: ₦{item.prices.shirt}</Text>
        <Text>Trouser: ₦{item.prices.trouser}</Text>
        <Text>Bedsheet: ₦{item.prices.bedsheet}</Text>
        <Text>Suit: ₦{item.prices.suit}</Text>
      </View>

      {/* View on Map Button */}
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => {
          setShowMap(true);
          setSelectedCompany(item);
        }}
      >
        <Text style={styles.mapButtonText}>View on Map</Text>
      </TouchableOpacity>

      {/* Request Quote Button */}
      <TouchableOpacity style={styles.quoteButton}>
        <Text style={styles.quoteButtonText}>Request a Quote</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
         <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.pageTitle}>Commercial Laundry Services</Text>

      {/* Filter Section */}
      <View style={styles.filterSection}>
        <TouchableOpacity onPress={() => setSelectedService('Dry Cleaning')} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Dry Cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedService('Home Pickup')} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Home Pickup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedService('')} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Company List */}
      <FlatList
        data={filterCompanies}
        renderItem={renderCompany}
        keyExtractor={(item) => item.name}
      />

      {/* Map View */}
      {showMap && selectedCompany && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: selectedCompany.latitude,
            longitude: selectedCompany.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: selectedCompany.latitude,
              longitude: selectedCompany.longitude,
            }}
            title={selectedCompany.name}
            description={selectedCompany.address}
          />
          <TouchableOpacity style={styles.closeMapButton} onPress={() => setShowMap(false)}>
            <Text style={styles.closeMapText}>Close Map</Text>
          </TouchableOpacity>
        </MapView>
      )}
    </View>
  );
};

export default CommercialLaundry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 80
  },
  filterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 10,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  companyCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
    color: 'green',
  },
  prices: {
    marginTop: 10,
  },
  mapButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  mapButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  quoteButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  quoteButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  map: {
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  closeMapButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 10,
  },
  closeMapText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
