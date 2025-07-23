import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, TouchableOpacity, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';



const AviatorPredictor = () => {
  const fullHistorySequence = [
    "1.65x", "2.35x", "1.26x", "1.66x", "3.31x", "1.37x", "7.81x", "2.22x", "2.92x", "7.30x",
    "1.05x", "1.00x", "5.73x", "1.01x", "34.97x", "1.52x", "6.30x", "12.54x", "6.48x", "1.24x",
    "6.83x", "3.61x", "1.11x", "134.10x", "1.86x", "1.25x", "1.92x", "1.11x", "2.04x", "1.44x",
    "1.07x", "1.09x", "2.21x", "1.88x", "13.77x", "2.03x", "5.06x", "1.50x", "1.48x", "16.94x",
    "56.57x", "11.36x", "3.12x", "3.07x", "2.04x", "1.02x", "1.03x", "1.57x", "1.24x", "2.56x",
    "1.08x", "1.02x", "1.07x", "1.75x", "1.25x", "2.07x", "35.52x", "34.37x", "1.37x", "1.58x",
    "122.12x", "53.57x", "2.24x", "2.18x", "2.10x", "5.61x", "2.28x", "3.33x", "3.46x", "4.23x",
    "18.02x", "4.55x", "2.15x", "2.12x", "1.02x", "4.85x", "2.09x", "1.99x", "4.22x", "68.02x",
    "1.58x", "1.01x", "2.08x", "1.12x", "1.19x", "1.40x", "2.41x", "2.46x", "6.05x", "1.42x",
    "4.26x", "1.27x", "2.48x", "3.24x", "4.37x", "6.41x", "3.89x", "1.43x", "8.66x", "1.04x",
    "1.16x", "1.07x", "2.09x", "17.92x", "2.14x", "1.57x", "4.53x", "10.51x", "3.52x", "2.91x",
    "1.41x", "1.77x", "2.92x", "3.98x", "2.66x", "1.20x", "3.83x", "1.45x","3.74x", "1.06x",
    "1.00x", "2.16x", "2.60x", "1.00x", "2.16x", "2.60x", "4.22x", "2.00x","4.41x", "2.33x", 
    "19.40x", "2.44x", "2.37x", "1.69x", "2.76x", "2.41x", "11.38x", "2.55x","5.51x", "2.17x",
    "2.12x", "5.78x", "2.47x", "2.75x", "4.23x", "5.62x", "6.88x", "3.47x","1.65x", "5.73x", 
    "3.15x", "4.44x", "3.07x", "7.14x", "3.43x", "2.71x", "3.63x", "1.64x",

  ];

  const getRandomStartingPoint = () => Math.floor(Math.random() * fullHistorySequence.length);
  const startingIndex = getRandomStartingPoint();

  const [historyData, setHistoryData] = useState([
    ...fullHistorySequence.slice(startingIndex + 1),
    ...fullHistorySequence.slice(0, startingIndex)
  ]);
  const [currentMultiplier, setCurrentMultiplier] = useState(fullHistorySequence[startingIndex]);
  const [nextIndex, setNextIndex] = useState((startingIndex + 1) % fullHistorySequence.length);
  const [nextOdd, setNextOdd] = useState<string | null>(null);
  const [blinkAnim] = useState(new Animated.Value(0));

  const getDurationForOdd = (value: number): number => {
    if (value <= 5) return 12000;
    if (value <= 10) return 17000;
    if (value <= 15) return 22000;
    if (value <= 30) return 32000;
    if (value <= 50) return 47000;
    return 70000;
  };

  useEffect(() => {
    const blink = Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, { toValue: 1, duration: 500, useNativeDriver: false }),
        Animated.timing(blinkAnim, { toValue: 0, duration: 500, useNativeDriver: false }),
      ])
    );
    blink.start();
    return () => blink.stop();
  }, []);

  useEffect(() => {
    const value = parseFloat(currentMultiplier.replace('x', ''));
    const duration = getDurationForOdd(value);

    const timeout = setTimeout(() => {
      setHistoryData(prevHistory => [currentMultiplier, ...prevHistory.slice(0, -1)]);
      const newCurrentIndex = nextIndex % fullHistorySequence.length;
      setCurrentMultiplier(fullHistorySequence[newCurrentIndex]);
      setNextIndex(newCurrentIndex + 1);
      setNextOdd(null);
    }, duration);

    return () => clearTimeout(timeout);
  }, [nextIndex, currentMultiplier]);

  const handleNextOdd = () => {
    setNextOdd(fullHistorySequence[nextIndex % fullHistorySequence.length]);
  };

  const getColorForOdds = (value: number) => {
    if (value >= 1 && value < 2) return 'skyblue';
    if (value >= 2 && value < 10) return 'purple';
    if (value >= 10 && value < 20) return 'purple';
    if (value >= 20) return 'deeppink';
    return '#FFD700';
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/small.mp4')}
        style={styles.backgroundVideo}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
        useNativeControls={false}
      />

      <View style={styles.headerContainer}>
        <Image source={require('../assets/action.jpeg')} style={styles.headerImage} />
        <Text style={styles.title}>Aviator Predictor</Text>
      </View>

      <View style={styles.mainContent}>
        <Animated.Text
          style={{
            ...styles.readyText,
            color: blinkAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['red', 'blue'],
            }),
          }}
        >
          Hacked!!!!!!
        </Animated.Text>

        <View style={styles.multiplierContainer}>
          <Text
            style={[
              styles.multiplierText,
              { color: getColorForOdds(parseFloat(currentMultiplier.replace('x', ''))) },
            ]}
          >
            {currentMultiplier}
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleNextOdd}>
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>

        {nextOdd && nextOdd !== currentMultiplier && (
          <Text style={styles.nextOddText}>
            Next Odd: {nextOdd}
          </Text>
        )}
      </View>

      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>Previous history</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.historyScroll}
        >
          {historyData.map((item, index) => {
            const numericValue = parseFloat(item.replace('x', ''));
            const textColor = getColorForOdds(numericValue);
            return (
              <View key={index} style={styles.historyItem}>
                <Text style={[styles.historyText, { color: textColor }]}>{item}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundVideo: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 },
  headerContainer: {
    paddingTop: 50,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(12, 12, 12, 0.85)',
  },
  headerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(12, 12, 12, 0.85)',
    padding: 20,
  },
  multiplierContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  readyText: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  multiplierText: { fontSize: 32, fontWeight: 'bold', marginHorizontal: 4 },
  buttonContainer: {
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nextOddText: { marginTop: 10, fontSize: 20, color: 'white', fontWeight: 'bold' },
  historyContainer: { padding: 10, backgroundColor: 'rgba(0,0,0,0.7)', marginBottom: 20 },
  historyTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  historyScroll: { flexDirection: 'row', alignItems: 'center' },
  historyItem: { marginHorizontal: 5 },
  historyText: { fontSize: 16, fontWeight: 'bold' },
});

export default AviatorPredictor;
