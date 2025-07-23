import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

type RootStackParamList = {
  BinancePay: undefined;
};

export default function BinanceScreen() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('BinancePay'); // Navigate to the instruction screen
    }, 1000); // simulate loading
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.innerContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter your email (optional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handlePayment}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Processing...' : 'Proceed to Binance Pay'}
            </Text>
          </TouchableOpacity>

          {loading && <ActivityIndicator size="large" color="#F0B90B" style={{ marginTop: 20 }} />}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  keyboardAvoidingView: { flex: 1 },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: { width: '100%', marginBottom: 20 },
  label: { fontSize: 16, color: '#333', marginBottom: 8, fontWeight: '500' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  button: {
    backgroundColor: '#F0B90B',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonDisabled: { backgroundColor: '#bbb' },
  buttonText: { color: '#000', fontSize: 18, fontWeight: 'bold' },
});
