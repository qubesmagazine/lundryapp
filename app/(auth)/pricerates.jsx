import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Icons for category representation
import { laundryCompanies } from '../../constants/LaundryData'; // Importing your laundry companies' data
import { router } from 'expo-router';

const PriceRates = () => {
  const [search, setSearch] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState(laundryCompanies);

  // Filter companies based on user search input (price)
  const filterCompaniesByPrice = (value) => {
    const filtered = laundryCompanies.filter((company) => {
      return Object.values(company.prices).some((price) => price <= value);
    });
    setFilteredCompanies(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by price (e.g., 1000)"
        value={search}
        onChangeText={(value) => {
          setSearch(value);
          filterCompaniesByPrice(Number(value)); // Convert search value to number
        }}
        keyboardType="numeric"
      />

      {/* Displaying laundry companies */}
      <FlatList
        data={filteredCompanies}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.companyContainer}>
            <Text style={styles.companyName}>{item.name}</Text>
            <Text style={styles.companyAddress}>{item.address}</Text>
            <Text style={styles.companyRating}>Rating: {item.rating}</Text>

            {/* Price Categories */}
            <View style={styles.priceContainer}>
              <View style={styles.priceItem}>
                <Ionicons name="shirt-outline" size={24} color="black" />
                <Text style={styles.priceText}>Shirt: ₦{item.prices.shirt}</Text>
              </View>
              <View style={styles.priceItem}>
                <Ionicons name="body-outline" size={24} color="black" />
                <Text style={styles.priceText}>Trouser: ₦{item.prices.trouser}</Text>
              </View>
              <View style={styles.priceItem}>
                <Ionicons name="bed-outline" size={24} color="black" />
                <Text style={styles.priceText}>Bedsheet: ₦{item.prices.bedsheet}</Text>
              </View>
              <View style={styles.priceItem}>
                <Ionicons name="business-outline" size={24} color="black" />
                <Text style={styles.priceText}>Suit: ₦{item.prices.suit}</Text>
              </View>
            </View>

            {/* Services Offered */}
            <Text style={styles.specialServices}>Services: {item.special_services.join(', ')}</Text>
          </View>
        )}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PriceRates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginTop: 50
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  companyContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  companyAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  companyRating: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  priceContainer: {
    marginBottom: 10,
  },
  priceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
    marginLeft: 10,
  },
  specialServices: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  nextButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
