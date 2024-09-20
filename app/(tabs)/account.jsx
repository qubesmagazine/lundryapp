import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

const Account = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Okwudili Onyido',
    email: 'okwudilionyido@icloud.com',
    phone: '+2349067561649',
    address: '123 Main St, Lagos, Nigeria',
  });

  const [paymentMethods, setPaymentMethods] = useState([
    { id: '1', cardNumber: '**** **** **** 1234', expiry: '12/25', cardholderName: 'Okwudili Onyido' }
  ]);

  const [orderHistory, setOrderHistory] = useState([
    { id: '1', orderDate: '2024-09-15', status: 'Delivered', total: 3100 },
    { id: '2', orderDate: '2024-08-30', status: 'Pending', total: 2500 },
  ]);

  const renderPersonalInfo = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={userInfo.name}
          onChangeText={(value) => setUserInfo({ ...userInfo, name: value })}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={userInfo.email}
          onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          value={userInfo.phone}
          onChangeText={(value) => setUserInfo({ ...userInfo, phone: value })}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          value={userInfo.address}
          onChangeText={(value) => setUserInfo({ ...userInfo, address: value })}
        />
      </View>
    </View>
  );

  const renderPaymentMethods = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Payment Methods</Text>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.paymentContainer}>
            <Text style={styles.paymentText}>Card: {item.cardNumber}</Text>
            <Text style={styles.paymentText}>Expiry: {item.expiry}</Text>
            <Text style={styles.paymentText}>Cardholder: {item.cardholderName}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Payment Method</Text>
      </TouchableOpacity>
    </View>
  );

  const renderOrderHistory = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Order History</Text>
      <FlatList
        data={orderHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderContainer}>
            <Text style={styles.orderText}>Order Date: {item.orderDate}</Text>
            <Text style={styles.orderText}>Status: {item.status}</Text>
            <Text style={styles.orderText}>Total: ₦{item.total}</Text>
          </View>
        )}
      />
    </View>
  );

  const renderLogoutButton = () => (
    <TouchableOpacity style={styles.logoutButton}>
      <Text style={styles.logoutButtonText}>Sign Out</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <>
          {renderPersonalInfo()}
          {renderPaymentMethods()}
          {renderOrderHistory()}
          {renderLogoutButton()}
        </>
      }
      data={[]} // Providing an empty data array since we are using ListHeaderComponent
    />
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,

  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginTop: 50
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  paymentContainer: {
    marginBottom: 15,
  },
  paymentText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderContainer: {
    marginBottom: 15,
  },
  orderText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
