import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  ActionScreen: undefined;
  MainActionScreen: undefined;
};

const ActionScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);

  const backgroundAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (loading) {
      const blinkAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(backgroundAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
          }),
          Animated.timing(backgroundAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
          }),
        ])
      );
      blinkAnimation.start();

      return () => blinkAnimation.stop(); // Clean up when loading ends
    }
  }, [loading]);

  const handleRun = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('MainActionScreen');
    }, 3000); // 3 seconds delay
  };

  const backgroundColor = backgroundAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'blue',],
  });

  return (
    <Animated.View style={[styles.container, loading && { backgroundColor }]}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.loadingText}>Starting...</Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.runButton} onPress={handleRun}>
          <Text style={styles.runButtonText}>Run The Bot</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default ActionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  runButton: {
    backgroundColor: 'red',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 12,
    elevation: 4,
  },
  runButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
  },
});
