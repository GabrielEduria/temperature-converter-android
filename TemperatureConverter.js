// TemperatureConverter.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');
export default function TemperatureConverter() {
  const [input, setInput] = useState('');
  const [fromUnit, setFromUnit] = useState('Celsius');
  const [toUnit, setToUnit] = useState('Fahrenheit');
  const [result, setResult] = useState('');

  const convertTemperature = () => {
    const value = parseFloat(input);
    if (isNaN(value)) {
      setResult('Please enter a valid number');
      return;
    }

    let celsius;

    // Convert input to celsius first
    if (fromUnit === 'Celsius') {
      celsius = value;
    } else if (fromUnit === 'Fahrenheit') {
      celsius = (value - 32) * (5 / 9);
    } else if (fromUnit === 'Kelvin') {
      celsius = value - 273.15;
    }

    // Then convert from celsius to target unit
    let finalValue;
    if (toUnit === 'Celsius') {
      finalValue = celsius;
    } else if (toUnit === 'Fahrenheit') {
      finalValue = celsius * (9 / 5) + 32;
    } else if (toUnit === 'Kelvin') {
      finalValue = celsius + 273.15;
    }

    setResult(`${finalValue.toFixed(2)} °${toUnit[0]}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperature Converter</Text>

      <View style={styles.conversionIndicator}>
        <Text style={styles.indicatorText}>
          Converting <Text style={styles.highlight}>{fromUnit}</Text> →{' '}
          <Text style={styles.highlight}>{toUnit}</Text>
        </Text>
      </View>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder={`Enter temperature in ${fromUnit}`}
        placeholderTextColor="#808080"
        value={input}
        onChangeText={setInput}
      />

      <View style={styles.selectionContainer}>
        <View style={styles.selectionGroup}>
          <Text style={styles.selectionLabel}>From:</Text>
          {['Celsius', 'Fahrenheit', 'Kelvin'].map((unit) => (
            <TouchableOpacity
              key={unit}
              style={[styles.button, fromUnit === unit && styles.activeButton]}
              onPress={() => setFromUnit(unit)}
            >
              <Text style={styles.buttonText}>{unit}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.selectionGroup}>
          <Text style={styles.selectionLabel}>To:</Text>
          {['Celsius', 'Fahrenheit', 'Kelvin'].map((unit) => (
            <TouchableOpacity
              key={unit}
              style={[styles.button, toUnit === unit && styles.activeButton]}
              onPress={() => setToUnit(unit)}
            >
              <Text style={styles.buttonText}>{unit}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.convertButton} onPress={convertTemperature}>
        <Text style={styles.convertButtonText}>Convert</Text>
      </TouchableOpacity>

      {result !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Result:</Text>
          <Text style={styles.result}>{result}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b1b1b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  title: {
    color: '#ffa31a',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  conversionIndicator: {
    marginBottom: 15,
    alignItems: 'center',
  },

  indicatorText: {
    color: '#ffffff',
    fontSize: 16,
  },

  highlight: {
    color: '#ffa31a',
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#292929',
    color: '#ffffff',
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
    marginBottom: 20,
    width: '100%',
  },

  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 20,
    width: '100%',
  },

  selectionGroup: {
    flex: 1,
  },

  selectionLabel: {
    color: '#808080',
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 14,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#292929',
    paddingVertical: 10,
    marginVertical: 4,
    borderRadius: 8,
    alignItems: 'center',
  },

  activeButton: {
    backgroundColor: '#ffa31a',
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },

  convertButton: {
    backgroundColor: '#ffa31a',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 12,
    alignItems: 'center',
    alignSelf: 'center',
    minWidth: 180,
  },

  convertButtonText: {
    color: '#1b1b1b',
    fontWeight: 'bold',
    fontSize: 18,
  },

  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },

  resultLabel: {
    color: '#808080',
    fontSize: 16,
    marginBottom: 8,
  },

  result: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
