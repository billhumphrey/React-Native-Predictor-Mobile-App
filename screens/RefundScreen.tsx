import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  ScrollView,
} from 'react-native';

const RefundRequest: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !orderNumber || !reason) {
      Alert.alert('Please fill in all fields');
      return;
    }

    const subject = encodeURIComponent('Refund Request');
    const body = encodeURIComponent(
      `Hello,\n\nI would like to request a refund.\n\nName: ${name}\nEmail: ${email}\nOrder Number: ${orderNumber}\nReason for Refund:\n${reason}\n\nThank you.`
    );

    const mailto = `mailto:support@aviatorgames.ai?subject=${subject}&body=${body}`;
    Linking.openURL(mailto).catch(() =>
      Alert.alert('Error', 'Could not open email client')
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Request a Refund</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Your full name"
      />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="you@example.com"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Mpesa code/Order ID</Text>
      <TextInput
        style={styles.input}
        value={orderNumber}
        onChangeText={setOrderNumber}
        placeholder="Order #123456"
      />

      <Text style={styles.label}>Reason for Refund</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={reason}
        onChangeText={setReason}
        placeholder="Explain your reason..."
        multiline
        numberOfLines={5}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Send Refund Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RefundRequest;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 30,
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
