import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Loader from './Loader';

type RootStackParamList = {
  AccessScreen: undefined;
};

const FIXED_AMOUNT = 25000;

export default function MpesaScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleAccessPress = () => {
    navigation.navigate('AccessScreen');
  };

  const handlePayment = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      Alert.alert('Success', 'Use the M-Pesa code and your number as your PASSKEY.');
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} testID="mpesa-screen">
      <Image 
        source={require('../assets/Screenshot-2025-04-02.png')} 
        style={styles.logo} 
        accessibilityLabel="M-Pesa Logo"
      />
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsTitle}>Follow These Steps:</Text>
        <Text style={styles.instruction}>
          1. Go to Lipa na M-Pesa and select Buy Goods and Services.
        </Text>
        <Text style={styles.instruction}>
          2. Enter <Text style={styles.highlight}>3546314</Text> as the Till number.
        </Text>
        <Text style={styles.instruction}>
          3. Enter amount as <Text style={styles.highlight}>{FIXED_AMOUNT.toLocaleString()}</Text> and proceed to pay.
        </Text>
        <Text style={styles.instruction}>
          4. <Text style={styles.highlight}>Note:</Text> Do not share the M-Pesa code with anyone.
        </Text>
        <Text style={styles.instruction}>
          5. Use the M-Pesa code and your M-Pesa number as your <Text style={styles.highlight}>PASSKEY</Text>.
        </Text>

        <Text style={styles.instruction}>
          6. <Text style={styles.highlight}>Instant</Text> payment processing or may take up to  <Text style={styles.highlight}>5 minutes</Text> before your order ID becomes active.
        </Text>
        <Text style={styles.instruction}>
          7.<Text style={styles.highlight}>⚠️ DO NOT SHARE </Text> Your M-Pesa code with anyone.
        </Text>
        <Text style={styles.instruction}>
          8. If you have any issues, please contact support.
        </Text>
        
      </View>

      {isProcessing ? (
        <Loader />
      ) : (
        <TouchableOpacity
          style={styles.accessButton}
          onPress={handleAccessPress}
          disabled={isProcessing}
          accessibilityLabel="Access Predictor"
          testID="access-button"
        >
          <Text style={styles.accessButtonText}>Access Predictor</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  instructionsContainer: {
    width: '90%',
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  instruction: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#00C853', // green color
  },
  accessButton: {
    backgroundColor: '#00C853',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
  },
  accessButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
