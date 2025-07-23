import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  AccessScreen: undefined;
  ActionScreen: undefined;
};

const BinancePayScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAccessPress = () => {
    navigation.navigate('AccessScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>How to Pay with Binance Pay</Text>
      <View style={styles.instructionsContainer}>
        <Text style={styles.step}><Text style={styles.bold}>1.</Text> Open the Binance app.</Text>
        <Text style={styles.step}><Text style={styles.bold}>2.</Text> Navigate to <Text style={styles.highlight}>"More"</Text> under the Home screen.</Text>
        <Text style={styles.step}><Text style={styles.bold}>3.</Text> Under <Text style={styles.highlight}>Common Functions</Text>, click <Text style={styles.highlight}>"Pay"</Text>.</Text>
        <Text style={styles.step}><Text style={styles.bold}>4.</Text> In the Pay screen, click <Text style={styles.highlight}>"Send"</Text>.</Text>
        <Text style={styles.step}><Text style={styles.bold}>5.</Text> Select <Text style={styles.highlight}>Binance ID</Text> and paste <Text style={styles.code}>568089776</Text>.</Text>
        <Text style={styles.step}><Text style={styles.bold}>6.</Text> Enter amount <Text style={styles.highlight}>199 USDT</Text>.</Text>
        <Text style={styles.step}><Text style={styles.bold}>7.</Text> Confirm the payment.</Text>
        <Text style={styles.step}><Text style={styles.bold}>8.</Text> Once the payment is done, copy the order ID (e.g., <Text style={styles.code}>2342xxxxxxx</Text>).</Text>
        <Text style={styles.step}><Text style={styles.bold}>9.</Text> You will use the <Text style={styles.highlight}>order ID and Binance Username</Text> as your <Text style={styles.bold}>PASSKEY</Text> to access the bot.</Text>
        <Text style={styles.step}><Text style={styles.bold}>10.</Text> Payment processing can be instant or may take up to <Text style={styles.highlight}>5 minutes</Text> before your order ID becomes active.</Text>
        <Text style={styles.warning}>⚠️ DO NOT SHARE YOUR ORDER ID WITH ANYONE.</Text>
      </View>

      <TouchableOpacity style={styles.accessButton} onPress={handleAccessPress}>
        <Text style={styles.accessButtonText}>Access Predictor</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#111',
  },
  instructionsContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  step: {
    fontSize: 16,
    marginVertical: 8,
    color: '#333',
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
  highlight: {
    color: '#e8b007',
    fontWeight: 'bold',
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#ddd',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  warning: {
    marginTop: 20,
    fontSize: 16,
    color: '#c0392b',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  accessButton: {
    backgroundColor: '#e8b007',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  accessButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BinancePayScreen;
