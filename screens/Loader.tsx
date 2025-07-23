import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#007bff" />
  </View>
);

export default Loader;