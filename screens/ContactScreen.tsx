import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';

export default function ContactScreen() {
  const openLink = (url: string) => Linking.openURL(url);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>

      <TouchableOpacity style={styles.button} onPress={() => openLink('https://wa.me/+254708787061')}>
        <Text style={styles.buttonText}>Contact via WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => openLink('https://t.me/hackedaiaviator')}>
        <Text style={styles.buttonText}>Join us on Telegram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => openLink('https://vm.tiktok.com/ZMSrwymcE/')}>
        <Text style={styles.buttonText}>Follow us on TikTok</Text>
      </TouchableOpacity>

      
            <TouchableOpacity onPress={() => Linking.openURL('https://aviatorgames.ai')}>
              <Text style={styles.link}>For more information visit aviatorgames.ai</Text>
            </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 15,
    color: '#333',
    marginTop: 30,
    textAlign: 'center',
    lineHeight: 22,
  },
  link: {
    fontSize: 16,
    color: '#0000EE',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
