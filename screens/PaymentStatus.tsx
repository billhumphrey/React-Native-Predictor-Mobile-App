import React from 'react';
import { View, Text } from 'react-native';

interface PaymentStatusProps {
  status: string;
  error: string | null;
}

const PaymentStatus = ({ status, error }: PaymentStatusProps) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Payment Status: {status}</Text>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

export default PaymentStatus;
