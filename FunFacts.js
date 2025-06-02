// FunFacts.js
import React from 'react';
import { Text } from 'react-native';

const facts = [
  "The highest recorded temperature on Earth is 56.7°C (134°F) in Death Valley, California.",
  "Absolute zero is the coldest possible temperature: -273.15°C or 0 Kelvin.",
  "The average body temperature is actually 36.5°C to 37°C, not exactly 37°C for everyone.",
  "Mercury is used in thermometers because it expands and contracts uniformly with temperature.",
  "Water has its highest density at 4°C, not when it's frozen.",
  "Fahrenheit and Celsius scales intersect at -40°, meaning -40°F = -40°C.",
  "Kelvin is the SI unit for temperature and doesn't use degrees.",
  "The core of the Sun can reach temperatures of around 15 million °C.",
  "Temperatures in space can drop as low as -270°C in the vacuum between stars.",
  "The hottest planet in the Solar System is Venus, with surface temperatures over 460°C.",
];

export default function FunFacts() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  return (
    <Text style={{ color: 'white', fontSize: 16, fontStyle: 'italic' }}>
      {fact}
    </Text>
  );
}
