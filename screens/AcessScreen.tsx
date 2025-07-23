import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ref, get } from 'firebase/database';
import { database } from '../firebase';

type RootStackParamList = {
  AccessScreen: undefined;
  ActionScreen: undefined;
};

const AccessScreen = () => {
  const [passkey, setPasskey] = useState('');
  const [binanceUsername, setBinanceUsername] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleContinue = async () => {
    if (passkey.trim() === '' || binanceUsername.trim() === '') {
      Alert.alert('Error', 'Please enter both passkey and Binance username.');
      return;
    }

    try {
      const accessRef = ref(database, 'access');
      const snapshot = await get(accessRef);

      if (snapshot.exists()) {
        const accessData = snapshot.val();
        const matchedKey = Object.keys(accessData).find(
          (key) => accessData[key].passkey === passkey.trim()
        );

        if (matchedKey) {
          // Check if the Binance username matches
          const storedBinanceUsername = accessData[matchedKey].binanceUsername;

          if (storedBinanceUsername === binanceUsername.trim()) {
            navigation.navigate('ActionScreen');
          } else {
            Alert.alert('Access Denied', 'Incorrect Binance username.');
          }
        } else {
          Alert.alert('Access Denied', 'Incorrect passkey.');
        }
      } else {
        Alert.alert('Error', 'Access list is empty.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to verify passkey and username.');
      console.error('Firebase read error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Passkey</Text>



      <TextInput
        style={styles.input}
        placeholder="Binance Username or Mpesa Code"
        value={binanceUsername}
        onChangeText={setBinanceUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Binance Order ID or Mpesa number"
        value={passkey}
        onChangeText={setPasskey}
        keyboardType="numeric"
        maxLength={20}
      />


      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue to Predictor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#111',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: 'grey',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default AccessScreen;
