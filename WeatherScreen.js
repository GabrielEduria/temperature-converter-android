// WeatherScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getWeather } from './api/weather';

export default function WeatherScreen({ onBack }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeather()
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffa31a" />
      </View>
    );
  }

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Failed to load weather data.</Text>
        <TouchableOpacity style={styles.button} onPress={onBack}>
          <Text style={styles.buttonText}>Back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/tamaraw.jpg')} style={styles.image} />
      <Text style={styles.title}>Valenzuela City Weather</Text>
      <Text style={styles.temp}>
        LIVE: <Text style={styles.liveTemp}>{weather.currentTemperature}°C</Text>
      </Text>
      <Text style={styles.description}>{weather.description}</Text>

      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Back to Main</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 350,  // Bigger image width
    height: 230, // Bigger image height
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    color: '#ffa31a',
    fontSize: 26,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  temp: {
    color: '#ffffff',
    fontSize: 22,
    marginBottom: 4,
  },
  liveTemp: {
    color: '#ff4d4d', // red color for LIVE temp number
    fontWeight: 'bold',
  },
  description: {
    color: '#ccc',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffa31a',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10, // button below text
  },
  buttonText: {
    color: '#1b1b1b',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 20,
  },
});
