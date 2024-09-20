import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const TrackOrder = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState('');

  // Simulate fetching order details based on tracking code
  const handleTrackOrder = () => {
    if (trackingCode === '12345') {
      setOrderDetails({
        name: 'Clean & Fresh Laundry',
        address: '12A, Adeola Odeku Street, Victoria Island, Lagos',
        items: ['2 Shirts', '1 Trouser', '1 Suit'],
        status: 'Out for Delivery',
        location: {
          latitude: 6.4281,
          longitude: 3.4216,
        },
      });
      setError('');
    } else if (trackingCode === '54321') {
      setOrderDetails({
        name: 'Sparkle Laundry',
        address: '42B, Lekki Phase 1, Lagos',
        items: ['1 Bedsheet', '3 Shirts'],
        status: 'Available for Pickup',
      });
      setError('');
    } else {
      setOrderDetails(null);
      setError('Invalid tracking code. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      
         <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.heading}>Track Your Order</Text>

      {/* Input Field for Tracking Code */}
      <TextInput
        style={styles.input}
        placeholder="Enter your tracking code"
        value={trackingCode}
        onChangeText={setTrackingCode}
      />
      <TouchableOpacity style={styles.trackButton} onPress={handleTrackOrder}>
        <Text style={styles.trackButtonText}>Track Order</Text>
      </TouchableOpacity>

      {/* Error Message */}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* Order Details Section */}
      {orderDetails && (
        <View style={styles.orderDetails}>
          <Text style={styles.companyName}>{orderDetails.name}</Text>
          <Text style={styles.address}>Address: {orderDetails.address}</Text>
          <Text style={styles.items}>Items: {orderDetails.items.join(', ')}</Text>
          <Text style={styles.status}>Status: {orderDetails.status}</Text>

          {/* If the order is "Out for Delivery", show the map */}
          {orderDetails.status === 'Out for Delivery' && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: orderDetails.location.latitude,
                longitude: orderDetails.location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{
                  latitude: orderDetails.location.latitude,
                  longitude: orderDetails.location.longitude,
                }}
                title={orderDetails.name}
                description="Your laundry is here"
              />
            </MapView>
          )}

          {/* If the order is available for pickup */}
          {orderDetails.status === 'Available for Pickup' && (
            <Text style={styles.pickupMessage}>Your laundry is ready for pickup!</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default TrackOrder;

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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 100
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  trackButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 20,
  },
  orderDetails: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
  },
  items: {
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  pickupMessage: {
    fontSize: 16,
    color: 'green',
    marginTop: 10,
  },
  map: {
    height: 200,
    marginTop: 10,
  },
});
