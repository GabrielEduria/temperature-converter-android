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
   function getTempLabel(temp) {
  if (temp <= 10) return '🥶 Cold';
  if (temp <= 20) return '☁️ Cloudy';
  if (temp <= 30) return '☀️ Sunny';
  if (temp <= 40) return '🔥 Hot';
  return '🌋 Extreme';
}

function getTempColor(temp) {
  if (temp <= 10) return '#00ccff';   // Blue
  if (temp <= 20) return '#cccccc';   // Gray
  if (temp <= 30) return '#ffd700';   // Yellow
  if (temp <= 40) return '#ff6600';   // Orange
  return '#ff1a1a';                   // Red
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
  function getTempLabel(temp) {
  if (temp <= 10) return '🥶 Cold';
  if (temp <= 20) return '☁️ Cloudy';
  if (temp <= 30) return '☀️ Sunny';
  if (temp <= 40) return '🔥 Hot';
  return '🌋 Extreme';
}
  return (
    <View style={styles.container}>
      <Image source={require('./assets/tamaraw.jpg')} style={styles.image} />
      <Text style={styles.title}>Valenzuela City Weather</Text>
      <Text style={styles.liveTemp}>{weather.currentTemperature}°C {getTempLabel(weather.currentTemperature)}</Text>
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
    width: 350,
    height: 230,
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
    color: '#ff4d4d',
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
    marginTop: 20,
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
  whatIfTitle: {
    color: '#ffa31a',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  success: {
    color: '#00ff88',
    fontSize: 16,
    marginBottom: 6,
  },
  warning: {
    color: '#ffcc00',
    fontSize: 16,
    marginBottom: 6,
  },
  danger: {
    color: '#ff4d4d',
    fontSize: 16,
    marginBottom: 6,
  },
  info: {
    color: '#3399ff',
    fontSize: 16,
    marginBottom: 6,
  },
  neutral: {
    color: '#cccccc',
    fontSize: 16,
    marginBottom: 6,
  },
});
